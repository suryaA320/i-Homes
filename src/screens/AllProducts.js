import React from 'react'
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Building from '../images/ProductImages/Building.jpg';
import HD_View from '../images/ProductImages/HD-View-2.jpg';
import FloorPlan from '../images/ProductImages/Floor-Plan.jpg';
import specifications from '../images/ProductImages/Specifications.jpg'
import { useNavigate } from "react-router-dom";
import { Card, Col, Row } from 'reactstrap';
import NewCarousal from '../components/NewCarousal';
import * as Icon from 'react-bootstrap-icons';


const AllProducts = () => {
    let navigate = useNavigate();

    const aboutUs = () => {
        let path = `/about-us`;
        navigate(path);
    }

    const projects = () => {
        let path = `/our-projects`;
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
                <NewCarousal />
            </div>

            <div>
                <p id='prarambh-text' className='reveal fade-bottom'>i Homes Prarambh</p>
            </div>

            <div className='container-fluid reveal fade-bottom' id='first-block' >
                <div className='row' >

                    <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12' id="ads_1" style={{ textAlign: 'center' }}>
                        <img src={Building} alt="i homes prarambh" className="d-block"
                            id='building-images' />
                    </div>

                    <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12' id="ads_1" style={{ textAlign: 'center', paddingLeft: '50px', paddingRight: '50px' }}>
                        <p id='first-headline'> A New Standard of Elegance and Comfort</p>
                        <p id='block-content'>Discover a world of luxury and comfort at our exquisite real estate apartments.
                            Designed to exceed your expectations, our meticulously crafted residences offer an unparalleled living experience
                            that combines contemporary aesthetics with thoughtful functionality. Welcome to a place where every detail has
                            been carefully considered to create a home that truly elevates your lifestyle.</p>
                        <button className="explore" onClick={projects} type="submit">Explore More</button>
                    </div>

                </div>
            </div>


            <div className='container-fluid reveal fade-bottom' id='first-block'>
                <div className='row' >

                    <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12' id="ads_1" style={{ textAlign: 'center', paddingLeft: '50px', paddingRight: '50px' }}>
                        <p id='first-headline'>Affordable Housing Initiatives Pave the Way for Inclusive Communities</p>
                        <p id='block-content'>Nestled Near TCS-Adibatla, our apartments offer the convenience of urban
                            living while maintaining a serene ambiance. With easy access to major highways, shopping centers,
                            schools, and entertainment options, you'll find yourself at the center of it all. The architectural
                            marvel of our apartments stands out as a symbol of sophistication. Clean lines, glass expanses,
                            and well-planned layouts create an ambiance that is both stylish and comfortable.</p>
                        <button className="explore" onClick={contactUs} type="submit">Contact Us</button>
                    </div>

                    <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12' id="ads_1" style={{ textAlign: 'center' }}>
                        <img src={HD_View} alt="New York" className="d-block"
                            id='building-images' />
                    </div>

                </div>
            </div>

            <div className='container-fluid reveal fade-bottom' id='initial'>
                <div className='container'>
                    <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12 '>
                        <p id='headline'>Our Vision & Goal</p>
                        <p className='mission-content'>
                            The vision for our construction project is to create sustainable, innovative,
                            and aesthetically pleasing properties that enhance the quality of life for residents and contribute
                            positively to the surrounding community. Our vision is to be recognized as a leader in delivering
                            environmentally conscious, modern, and thoughtfully designed spaces that stand the test of time.
                        </p>
                        <button className="discover-more-button" onClick={contactUs} type="submit">Discover More</button>
                    </div>
                </div>
            </div>

            <div className='container-fluid reveal fade-bottom' id='initial'>
                <div className='container'>
                    <p id='headline'>Values We Follow</p>
                    <div className='container'>
                        <Row>
                            <Col xs={12} md={3} id='try'>
                                <Card id='round-img'>
                                    <Icon.People id='icon'/>
                                </Card>
                                <div id='content-card'>
                                    <h3 style={{marginTop:'100px'}}>Expertise</h3>
                                    <p style={{ marginTop: '30px' }}>Our team of seasoned architects, engineers, and construction professionals brings a wealth
                                        of knowledge and experience to every project. </p>
                                </div>
                            </Col>

                            <Col xs={12} md={3} id='try'>
                                <Card id='round-img'>
                                <Icon.ZoomIn id='icon'/>
                                </Card>
                                <div id='content-card'>
                                    <h3 style={{marginTop:'100px'}}>Transparency</h3>
                                    <p style={{ marginTop: '30px' }}>Open communication and transparency are fundamental to our client 
                                    relationships. </p>
                                </div>
                            </Col>

                            <Col xs={12} md={3} id='try'>
                                <Card id='round-img'>
                                <Icon.Bezier2 id='icon'/>
                                </Card>
                                <div id='content-card'>
                                    <h3 style={{marginTop:'100px'}}>Innovation</h3>
                                    <p style={{ marginTop: '30px' }}>We embrace cutting-edge construction methods and materials to 
                                    create apartment buildings that are not only aesthetically pleasing but also technologically 
                                    advanced and energy-efficient.</p>
                                </div>
                            </Col>

                            <Col xs={12} md={3} id='try'>
                                <Card id='round-img'>
                                <Icon.BookmarkStarFill id='icon'/>
                                </Card>
                                <div id='content-card'>
                                    <h3 style={{marginTop:'100px'}}>Quality Assurance</h3>
                                    <p style={{ marginTop: '30px' }}> Quality is our top priority. Our rigorous quality assurance 
                                    processes and attention to detail at every stage of construction guarantee that the finished product 
                                    surpasses expectations </p>
                                </div>
                            </Col>

                        </Row>
                    </div>
                </div>
            </div>

            <div className='container reveal fade-bottom' id='Third-block'>
                <p id='our-projects'>i-Homes Prarambh Project Details</p>
                <Row>
                    <Col xs={12} md={6} style={{ marginTop: '20px' }}>
                        <div>
                            <img src={FloorPlan} alt="i homes prarambh adibatla floor plan details" className="d-block"
                                id='building-images' />
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
                    <Col xs={12} md={6} style={{ marginTop: '20px' }}>
                        <div>
                            <img src={specifications} alt="i homes prarambh adibatla specifications" className="d-block"
                                id='building-images' />
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