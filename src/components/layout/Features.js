import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "../../App.css"
import { Col, Row } from 'react-bootstrap';

const data = [
  {
    icon: faCheckCircle,
    title: "Average turnaround of 7 days",
  },
  {
    icon: faCheckCircle,
    title: "Easy online booking",
  },
  {
    icon: faCheckCircle,
    title: "Over 100+ scanning centers",
  },
  {
    icon: faCheckCircle,
    title: "Receive your results online",
  },
];

const features = [
  {
    title: "No GP reference required",
    content:"Set your psyche straight Follow up conference No holding up records",
    img:"assets/features/doctor.png"
  },
  {
    title: "Our group of clinical experts",
    content:"can Stay away from the pressure of the Get computerized duplicates of your Avoid the endless NHS holding up",
    img:"assets/features/healthcare.png"
  },
  {
    title: "deal with your MRI reference",
    content:"for NHS and attempting to persuade imaging and have a subsequent records. An early analysis consistently",
    img:"assets/features/medical-history.png"
  },
  {
    title: "you without reaching your GP.",
    content:"your GP to allude you for a MRI. meeting our clinical group. implies a superior anticipation.",
    img:"assets/features/microscope.png"
  }
]
/*
*/ 
const Features = () => {
  return (
    <div>
    <div className="features my-8" style={styles.features}>
      <Row className='container mx-auto'>
        {data.map(({ title, icon }, idx) => {
          return (
            <Col md="3" key={idx} className="text-center text-white p-3">
              <FontAwesomeIcon icon={icon} />
              <span className="ps-2">{title}</span>
            </Col>
          );
        })}
      </Row>
    </div>
    <Row className='container mx-auto my-5'>
      {features.map(({ title, img,content }, idx) => {
          return (
            <Col sm="6" md="3" key={idx} className="text-xs-center text-md-start p-3 mb-3 ">
              <div className='p-3'>
              <img src={img} alt={title} height={100} />
              <h5 className="mt-4 text-dark">{title}</h5>
              <p className="fs-6 text-secondary">{content}</p>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Features;
