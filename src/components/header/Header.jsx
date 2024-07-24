import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiHomeAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./header.css";
import logo from "../../logo.svg";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary header">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} className="d-inline-block align-top" alt="logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto links">
            <Link to="/" className="nav-link">
              <BiHomeAlt />
              Home
            </Link>
            <Link to="/about" className="nav-link">
              <AiOutlineInfoCircle />
              About
            </Link>
            <Link to="#telegram" className="nav-link telegram">
              <FaTelegramPlane />
              Telegram
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
