import { Button, Card, Col, Container, Row } from "react-bootstrap";

import "./home.css";
import Ad728x90 from "../../components/ads/Ad728x90";
import Ad468x60 from "../../components/ads/Ad468x60";
import Ad320x50 from "../../components/ads/Ad320x50";
import Ad300x250 from "../../components/ads/Ad300x250";
import Loader from "../../components/Loader/Loader";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [load, setLoad] = useState(true);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/courses/get")
      .then(async (response) => {
        setCourses(await response.data.message.curses);
        setLoad(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <>
      {load && <Loader />}
      <Container>
        <section className="home">
          <div className="w-100 heading d-lg-flex align-items-lg-center justify-content-lg-between flex-lg-row-reverse">
            <Ad728x90 display={"d-none d-md-block mx-md-0"} />
            <Ad320x50 display={"d-sm-none"} />
            <Ad468x60 display={"d-none d-md-none d-sm-flex"} />
            <Ad300x250 display={"d-sm-none"} />
            <h2 className="m-lg-0">Free Course Coupon</h2>
          </div>
          <Row className="mt-lg-3 w-100">
            {courses &&
              courses.map((course, index) => (
                <Col
                  className="d-sm-flex justify-content-sm-center justify-content-md-end"
                  sm={12}
                  md={6}
                  lg={4}
                  xxl={3}
                  key={index}
                >
                  <Card>
                    <Card.Img variant="top" src={course.image} />
                    <Card.Body>
                      <Card.Title>{course.title}</Card.Title>
                      <Card.Text>{course.sub_title}</Card.Text>
                      <Button href={`/c/${course.id}`} variant="primary">
                        Enroll now
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}

            {/* <Col
              className="d-sm-flex justify-content-sm-center justify-content-md-end"
              sm={12}
              md={6}
              lg={4}
              xxl={3}
            >
              <Card>
                <Card.Img
                  variant="top"
                  src="https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
                <Card.Body>
                  <Card.Title>Build a simple React App from scratch</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Enroll now</Button>
                </Card.Body>
              </Card>
            </Col> */}
          </Row>
        </section>
      </Container>
    </>
  );
};

export default Home;
