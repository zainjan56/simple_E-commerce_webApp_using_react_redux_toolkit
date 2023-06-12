import { useSelector } from "react-redux";

import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import logo from "../images/logo1.png";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <div>
      <Navbar className="bgColor" expand="lg">
        <Container fluid>
          <img src={logo} alt="logo" className="smallImage" />
          <Navbar.Brand>
            <b>Five Star Store</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/" className="Links">
                Home
              </Link>
              <Link to="details" className="Links">
                Details
              </Link>
            </Nav>
            <Link to="carts" className="Links">
              <Button variant="outline-secondary" style={{ color: "black" }}>
                My Cart: {cartQuantity}
              </Button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
