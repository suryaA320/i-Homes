/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Col, Row } from 'reactstrap'
import * as Icon from 'react-bootstrap-icons';
import { useNavigate } from "react-router-dom";

const Footer = () => {

    let navigate = useNavigate();

    const homePage = () => {
        let path = `/`;
        navigate(path);
    }

    const aboutUs = () => {
        let path = '/about-us';
        navigate(path);
    }

    const contactUs = () => {
        let path = '/contact-us';
        navigate(path);
    }

    return (
        <div className="container-fluid mt-5" id="footer" style={{ height: 'auto' }}>
            <Row style={{ marginTop: '50px', textAlign: 'center', paddingTop: '100px', paddingBottom: '100px' }}>
                <Col className='my-auto' xs={12} md={4} >
                    <h2>i-Homes Prarambh</h2>
                    <p>2 & 3 BHK, Premium Luxuary Apartments</p>
                    <p>@ TCS ADIBATLA</p>



                </Col>
                <Col className='my-auto' xs={12} md={4}>
                    <p>i-Homes Prarambh</p>
                    <div className='socialMedia-icons'>
                        <ul className="nav" >
                            <li className="nav-item">
                                <a type='button' href='https://www.facebook.com/profile.php?id=100091064176070' className="links"><Icon.Facebook style={{ color: 'white' }} /></a>
                            </li>
                            <li className="nav-item">
                                <a type='button' className="links"><Icon.Instagram style={{ color: 'white' }} /></a>
                            </li>
                            <li className="nav-item">
                                <a type='button' className="links"><Icon.Youtube style={{ color: 'white' }} /></a>
                            </li>
                            <li className="nav-item">
                                <a type='button' href='https://www.linkedin.com/in/auctus-tech-a01a6926b' className="links"><Icon.Linkedin style={{ color: 'white' }} /></a>
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col className='my-auto' xs={12} md={4}>
                    <ul style={{ listStyleType: 'none', lineHeight: '50px' }}>
                    <li><a onClick={homePage} type='button'>Home</a></li>
                        <li><a onClick={aboutUs} type='button'>About us</a></li>
                        <li><a onClick={contactUs} type='button'>Contact us</a></li>
                    </ul>
                </Col>
            </Row>
            <hr></hr>
            <Row>
                <p style={{ textAlign: 'center' }}>2023 - Copyright @ i-Homes. All Rights Reserved</p>
            </Row>
        </div>
    )
}

export default Footer