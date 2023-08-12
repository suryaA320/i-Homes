import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import contact from '../images/ProductImages/Building.jpg';
import { Col, Row } from 'reactstrap';
import * as Icon from 'react-bootstrap-icons';


const contactUs = () => {
    return (
        <>
            <div>
                <Nav />
            </div>

            <div className='container-fluid' >
                <div className='row' >
                    <div></div>

                    <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12' id="ads_2" style={{ textAlign: 'center' }}>
                        <img src={contact} alt="New York" class="img-fluid"
                            style={{ borderRadius: '20px' }} id='building-images'/>
                    </div>

                    <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12' id="ads_2" style={{ textAlign: 'center', paddingLeft: '50px', color: 'white', paddingRight: '50px', backgroundColor: '#222222', borderRadius: '20px' }}>
                        <p id='contact-us-letter' >Contact US</p>

                        <Row id='contact-details'>
                            <Col xs={12} md={4}>
                                <div>
                                    <h3>Consult us @</h3>
                                    <p >Illuminati<br />
                                        #6 & 7, Second Floor, Shree Homes, <br />
                                        Hastinapuram <br />
                                        Sagar Road, R.R Dist <br />
                                        Hyderabad-500070. <br />

                                    </p>
                                </div>
                            </Col>

                            <Col xs={12} md={4}>
                                <div>
                                    <h3>Get In Touch </h3>
                                    <p><span style={{ marginRight: '10px' }}><Icon.Phone style={{ color: 'white' }} /></span><a href='tel:8019967799'>8074112793</a></p>
                                </div>
                            </Col>

                            <Col xs={12} md={4}>
                                <div>
                                    <h3>Write to Us</h3>
                                    <p><span style={{ marginRight: '10px' }}><Icon.Envelope style={{ color: 'white' }} /></span>illuminatidesign@gmail.com</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div id='maps' className='container' >
                        <Row>
                            <Col xs={12} md={12}>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3810.6953264270787!2d78.53997717590075!3d17.233563407216927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba594b4ba17a7%3A0xed9a6dd8c827881f!2sIHOMES%20PRARAMBH!5e0!3m2!1sen!2sin!4v1691388758088!5m2!1sen!2sin" width="100%" height="650" style={{ border: 0, borderRadius:'20px' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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