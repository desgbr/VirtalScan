import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';

const NavbarComp = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="white"
        variant="white"
        className="shadow-sm mb-8"
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              src="/logo_vitalscan_w_1_b.png"
              height="24"
              alt="Vitalscan logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center justify-content-start gap-2">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/SymptomChecker">Symptom Checker</Nav.Link>
              <Nav.Link href="">Services </Nav.Link>
              <Nav.Link href="">About us</Nav.Link>
              <Nav.Link href="">Patient Journey</Nav.Link>
              <Nav.Link href="">
                <Button bg="primary" style={{ verticalAlign: "text-top" }}>
                  Book Now
                  <img
                    src="/assets/angle-right.6.svg"
                    alt="arrow"
                    height={20}
                    width={20}
                    style={{
                      background: "white",
                      borderRadius: "50%",
                      marginLeft: "10px",
                    }}
                  />
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComp;
