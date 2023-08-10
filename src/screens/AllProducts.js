import React from 'react'
import Nav from '../components/Nav';
import Footer from '../components/Footer';
// import carousal_2 from '../images/carousImages/carousal_2.jpg';
import Building from '../images/ProductImages/Building.jpg';
import HD_View from '../images/ProductImages/HD-View-2.jpg';
import FloorPlan from '../images/ProductImages/Floor-Plan.jpg';
import specifications from '../images/ProductImages/Specifications.jpg'
import { useNavigate } from "react-router-dom";
import Carousal from '../components/Carousal';
import * as Icon from 'react-bootstrap-icons';
import Mission from '../images/ProductImages/mission.jpg';
import Vision from '../images/ProductImages/vision.jpg';
import bullsEye from '../images/carousImages/Bulls-eye.png';
import Focus from '../images/carousImages/Focus.png';
import Glass from '../images/carousImages/magnifying-glass.png';
import { Col, Row } from 'reactstrap';

const AllProducts = () => {
    let navigate = useNavigate();

    const aboutUs = () => {
        let path = `/about-us`;
        navigate(path);
    }

    const contactUs = () => {
        let path = `/contact-us`;
        navigate(path);
    }

    function reveal() {
        var reveals = document.querySelectorAll(".reveal");

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }

    window.addEventListener("scroll", reveal);


    return (
        <>
            <div className="navy" style={{ zIndex: 1090 }}><Nav /></div>

            <div className="container-fluid" id='carousal-part' style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                <Carousal />
            </div>

            {/* <div className='container' id='initial'>
                <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12' id="ads_1" style={{ paddingLeft: '10px', paddingRight: '50px' }}>
                    <h1 style={{ marginBottom: '30px', color: 'white', fontSize: '62px' }}>Grow Your business With AucTech</h1>
                    <p className='dubb'>
                        End to End 'HR' Solutions for organizations<br></br>
                        We are "ONE STOP" solution for your business needs providing valuable services like, <br />
                        Talent Acquisition, Payroll Management, HR Advisory, HR Outsourcing, HR Audit & Many more..
                    </p>
                    <button className="shopnow" onClick={contactUs} type="submit">Discover More</button>
                </div>
            </div> */}

            {/* <div className='container' style={{ marginTop: '200px' }}>

                <Row>
                    
                    <Col xs={12} md={4}>
                        <Card id="dubb-card">
                        <img src={bullsEye} class="img-fluid" style={{height: '270px', width: '415px', backgroundColor: 'pink', borderRadius: '20px'}} alt='auctech technologies' />
                            <CardBody>
                                <CardTitle id='service-title'>
                                    Our Mission
                                </CardTitle>
                                <hr />
                                <CardText id='service-text'>
                                    We are fully trained & equipped hard working team with a goal to achieve together in reaching the milestone.
                                    We adapt to our clients changing needs as well as changes in the market to make sure we are a business of growth, success and happiness.
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={12} md={4}>
                        <Card id="dubb-card">
                        <img src={Focus} class="img-fluid" style={{height: '270px', width: '415px', backgroundColor: 'pink', borderRadius: '20px'}} alt='auctech technologies' />
                            <CardBody>
                                <CardTitle id='service-title'>
                                    Our Vision
                                </CardTitle>
                                <hr />
                                <CardText id='service-text'>
                                    We will achieve our vision by partnering with our clients to recruit, manage & retain their workforce using our outstanding
                                    knowledge on both permanent & contract Employment. We are the management consultants, fully equipped with end-to-end facilities
                                    for all our services we provide, we take the client to the next step in terms of their core target achievement.
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={12} md={4}>
                        <Card id="dubb-card">
                            <img src={Glass} class="img-fluid" style={{height: '270px', width: '415px', backgroundColor: 'pink', borderRadius: '20px'}} alt='auctech technologies' />
                            <CardBody>
                                <CardTitle id='service-title'>
                                    Our Focus
                                </CardTitle>
                                <hr />
                                <CardText id='service-text'>
                                    Our Main Focus is to provide our clients, The eligible candidates with Industry
                                    standards who can put in their effort for growth of the company
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

            </div> */}

            <div className='container-fluid reveal fade-bottom' id='first-block' >
                <div className='row' >

                    <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12' id="ads_1" style={{ textAlign: 'center' }}>
                        <img src={Building} alt="i homes prarambh" className="d-block"
                             id='building-images'/>
                    </div>

                    <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12' id="ads_1" style={{ textAlign: 'center', paddingLeft: '50px', paddingRight: '50px' }}>
                        <p id='first-headline'> A New Standard of Elegance and Comfort</p>
                        <p id='block-content'>Discover a world of luxury and comfort at our exquisite real estate apartments.
                            Designed to exceed your expectations, our meticulously crafted residences offer an unparalleled living experience
                            that combines contemporary aesthetics with thoughtful functionality. Welcome to a place where every detail has
                            been carefully considered to create a home that truly elevates your lifestyle.</p>
                        <button className="explore" onClick={aboutUs} type="submit">Explore More</button>
                    </div>

                </div>
            </div>


            <div className='container-fluid reveal fade-bottom' id='first-block'>
                <div className='row' >

                    <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12' id="ads_1" style={{ textAlign: 'center', paddingLeft: '50px', paddingRight: '50px' }}>
                        <p id='first-headline'>Affordable Housing Initiatives Pave the Way for Inclusive Communities</p>
                        <p id='block-content'>To Power the Innovation Excellence and be a
                            spring of robust Technology solutions provider &
                            Trusted partnet of growth for the universe of business</p>
                        <button className="explore" onClick={contactUs} type="submit">Contact Us</button>
                    </div>

                    <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12' id="ads_1" style={{ textAlign: 'center' }}>
                        <img src={HD_View} alt="New York" className="d-block"
                            id='building-images' />
                    </div>

                </div>
            </div>

            <div className='container reveal fade-bottom' id='Third-block'>
                <p id='our-projects'>i-Homes Prarambh Project Details</p>
                <Row>
                    <Col xs={12} md={6}>
                        <div>
                            <img src={FloorPlan} alt="i homes prarambh adibatla floor plan details" className="d-block"
                                style={{ width: '100%', height: '500px' }} />
                        </div>
                        <div>
                            <p id='aminities'>Our Aminities</p>
                            <ul id='Aminity-list'>
                                <li>HMDA Approved Appartment.</li>
                                <li>Luxuary flat as per HMDA Approved Plan.</li>
                                <li>Vastu Compliance.</li>
                                <li>Built-up area from 1257sft to 1803sft.</li>
                                <li>Comprehensive Security System with cameras at appropriate locations.</li>
                                <li>Guest Parking Facility.</li>
                            </ul>
                        </div>
                        <div>
                            <button className="knowMore" onClick={aboutUs} type="submit">Explore More</button>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div>
                            <img src={specifications} alt="i homes prarambh adibatla specifications" className="d-block"
                                style={{ width: '100%', height: '500px' }} />
                        </div>
                        <div>
                            <p id='aminities'>Project Specifications</p>
                            <ul id='Aminity-list'>
                                <li><span id='aminity-head'>RCC Super Structure:</span> RCC Super Structure with 6" Thickness</li>
                                <li> <span id='aminity-head'>Bathrooms:</span>Built with 7.0 height Vetrified tiles with standard make.</li>
                                <li> <span id='aminity-head'>Painting :</span> 2cotes of Assian/Birla putty and sanding to a smooth finish, 1 coat of primer & 2 cotes ofpremium emulsion</li>
                                <li> <span id='aminity-head'>Balcony :</span> Rustic Ceramic Tiles of standard make in balconies.</li>
                                <li> <span id='aminity-head'>Parking:</span> equipped with Natural Stone / parking Tiles of standard make.</li>
                            </ul>
                        </div>
                        <div>
                            <button className="knowMore" onClick={aboutUs} type="submit">Explore More</button>
                        </div>
                    </Col>
                </Row>
            </div>

            <div>
                <Footer />
            </div>
        </>
    )
}

export default AllProducts;