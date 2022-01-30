import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';


const Header = () => {
  return (
    <div className='my-5'>
      <Container>
        <Row>
          <Col
            md="6"
            className="d-flex justify-content-center flex-column align-items-end"
          >
            <div>
              <h1 className="fw-bold text-uppercase">Book your own</h1>
              <h1 className="text-success text-uppercase">
                Private MRI scan
              </h1>
              <p>
                No GP Referral is needed as we have a group of specialist
                doctors who supervise your diagnostics from start to finish.
                Book online in minutes.
              </p>
              <Button size="lg">
                {" "}
                Book now
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
            </div>
          </Col>
          <Col md="6">
            <img
              src="/human-body-scanning-in-mri-machine-4047420-3351735.webp"
              alt="human body scanning"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
