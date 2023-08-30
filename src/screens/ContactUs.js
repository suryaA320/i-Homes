import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import contact from '../images/ProductImages/Building.jpg';
import { Col, Row } from 'reactstrap';
import * as Icon from 'react-bootstrap-icons';
import x from '../images/ProductImages/prarambh.JPG'


const contactUs = () => {
    return (
        <>
            <div>
                <Nav />
            </div>

            <div className='container-fluid' id='contactus-container'>
                <div className='row' >
                    <div></div>

                    <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12' id="ads_2" style={{ textAlign: 'center' }}>
                        <img src={x} alt="New York" class="img-fluid"
                            style={{ borderRadius: '20px' }} id='building-images'/>
                    </div>

                    <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12' id="contact-text" >
                        <p id='contact-us-letter' >Contact US</p>

                        <Row id='contact-details'>
                            <Col xs={12} md={4}>
                                <div>
                                    <h3 id='heading'>Consult us @</h3>
                                    <h4 id='contact-text'>ihomedevelopers </h4>
                                    <p >
                                        #6 & 7, Second Floor, Shree Homes, <br />
                                        Hastinapuram <br />
                                        Sagar Road, R.R Dist <br />
                                        Hyderabad-500070. <br />

                                    </p>
                                </div>
                            </Col>

                            <Col xs={12} md={4}>
                                <div>
                                    <h3 id='heading'>Get In Touch </h3>
                                    <p><span style={{ marginRight: '10px' }}><Icon.Phone style={{ color: 'white' }} /></span><a href='tel:8019967799'>7997797474</a></p>
                                </div>
                            </Col>

                            <Col xs={12} md={4}>
                                <div>
                                    <h3 id='heading'>Write to Us</h3>
                                    <p><span style={{ marginRight: '10px' }}><Icon.Envelope style={{ color: 'white' }} /></span>ihomes.ind@gmail.com</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div id='maps' className='container' >
                        <Row>
                            <Col xs={12} md={12}>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1605.8494845170203!2d78.56270280261776!3d17.235954084968675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDE0JzA5LjUiTiA3OMKwMzMnNDkuNiJF!5e0!3m2!1sen!2sin!4v1693048804256!5m2!1sen!2sin" width="100%" height="650" style={{ border: 0, borderRadius:'20px' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>

            <div>
                <Footer />
            </div>
        </>
    )
}

export default contactUs