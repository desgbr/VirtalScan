import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faHeadphonesAlt, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
  return (
    <footer className='mt-5 py-5 bg-dark text-light'>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-6 col-md-3 my-3'>
                    <img src="/logo_vitalscan_w_1_b.png" width="250" alt="vitalscan logo" />
                    <div className='mt-3'>
                        <small>2021 &copyright; Vitalscan. All Rights reserved</small>
                    </div>
                </div>
                <div className='col-sm-6 col-md-3 my-3'>
                    <h5>Quick links</h5>
                    <div className='d-flex flex-column'>
                        <a href='/'>Home</a>
                        <a href='/'>Services</a>
                        <a href='/'>About us</a>
                        <a href='/'>Contact</a>
                    </div>
                </div>
                <div className='col-sm-6 col-md-3 my-3'>
                    <h5>Resources</h5>
                    <div className='d-flex flex-column'>
                        <a href='/'>Blog</a>
                        <a href='/'>Patient Jourany</a>
                    </div>
                </div>
                <div className='col-sm-6 col-md-3 my-3'>
                    <h5>Contact</h5>
                    <div className='d-flex flex-column'>
                        <a href='/'>
                            <FontAwesomeIcon icon={faHeadphonesAlt} />
                            <span className='ms-2'>Hotline: +3 (092) 508-38-01</span>
                        </a>
                        <a href='/'>
                            <FontAwesomeIcon icon={faMapMarkedAlt} />
                            <span className='ms-2'>Address: 23, Medical Str., New York, USA</span>
                        </a>
                        <a href='/'>
                            <FontAwesomeIcon icon={faClock} />
                            <span className='ms-2'>Mon-Sat: 8:00AM - 7:00PM</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>)
}

export default Footer;
