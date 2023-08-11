import React from 'react'
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Building from '../images/ProductImages/Building.jpg';
import HD_View from '../images/ProductImages/HD-View-2.jpg';
import FloorPlan from '../images/ProductImages/Floor-Plan.jpg';
import specifications from '../images/ProductImages/Specifications.jpg'
import { useNavigate } from "react-router-dom";
import { Col, Row } from 'reactstrap';
import NewCarousal from '../components/NewCarousal';

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
                <NewCarousal />
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