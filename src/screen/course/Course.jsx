import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import "./course.css";
import Ad300x250 from "../../components/ads/Ad300x250";
import Ad728x90 from "../../components/ads/Ad728x90";
import Ad320x50 from "../../components/ads/Ad320x50";
import Ad468x60 from "../../components/ads/Ad468x60";
import AdNativeBanner from "../../components/ads/AdNativeBanner";

const Course = () => {
  let { id } = useParams();

  return (
    <Container>
      <section className="courses">
        <Ad728x90 display={"d-none d-md-block"} />
        <Ad320x50 display={"d-sm-none"} />
        <Ad468x60 display={"d-none d-md-none d-sm-flex"} />
        <Row>
          <Col lg={5} xl={4} className="left d-none d-lg-block">
            <Card>
              <Ad300x250 />
              <AdNativeBanner display={""} />
              <Button
                href="/sadas"
                variant="success"
                className="w-80 py-3 mt-5"
              >
                Click Here to Enroll now
              </Button>
              <Button href="/a" variant="danger" className="w-80 py-3 my-2">
                cancel
              </Button>
            </Card>
          </Col>

          <Col lg={7} xl={8}>
            <div className="center">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://img-c.udemycdn.com/course/750x422/6018018_ddb9.jpg"
                />
                <Card.Body>
                  <Card.Title>
                    [100% Off] Customer Service and Sales: Empathetic
                    Communication Free Course Coupon
                  </Card.Title>
                  <Card.Text>
                    Master empathetic communication and build lasting customer
                    relationships in service and sales careers.
                  </Card.Text>
                </Card.Body>
                <Ad728x90 display={"d-none d-md-block"} />
                <Ad320x50 display={"d-sm-none"} />
                <Ad468x60 display={"d-none d-md-none d-sm-flex"} />
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>
                    <h3>Discretion</h3>
                    <p>
                      In business, the saying “Communication is Key” has never
                      been more true. But not all types of communication are
                      equal… To truly offer our customers and clients the
                      highest levels of tailored service, we MUST understand
                      their needs, feelings, emotions and expectations. And for
                      this… EMPATHY is our sales and service superpower. Empathy
                      driven communication lays the foundation to delivering
                      exceptional customer service and successful sales within a
                      business environment. In today's interconnected world,
                      where constant methods of communication and feedback are
                      open, mastering empathetic communication is a vital skill
                      for all business professionals - especially so within
                      <Ad728x90 display={"d-none d-md-block"} />
                      <Ad320x50 display={"d-sm-none"} />
                      <Ad468x60 display={"d-none d-md-none d-sm-flex"} />
                      <AdNativeBanner display={""} />
                      service and sales roles. Due to the increased levels of
                      client and customer interactions, businesses increasingly
                      seek employees who can build strong, empathetic
                      relationships with customers, leading to improved
                      satisfaction, sales performances and most importantly -
                      loyal and returning customers. To put it simply… The
                      better your empathetic communication skills, the more
                      successful you will be in your customer service and sales
                      roles. “But where can I find a great course to enhance all
                      these essential business skills?” If you are looking for
                      one complete course to MASTER empathetic communication for
                      customer service and sales… This is the course for you.
                    </p>
                  </ListGroup.Item>
                  <Ad300x250 display={""} />
                  <AdNativeBanner display={""} />
                </ListGroup>
                <Card.Body>
                  <Button variant="primary" className="w-100 py-3">
                    Enroll now
                  </Button>
                </Card.Body>
              </Card>
              <AdNativeBanner display={""} />
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Course;
