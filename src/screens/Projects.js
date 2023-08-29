import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import prarambh from '../images/ProductImages/current-project.png';
import Bloom_1 from '../images/ProductImages/bloom_1.png';
import I_Bloom from "../images/ProductImages/The11.jpg";
import I_bloom_carousel from "../images/ProductImages/carousel_1.jpeg"
import SLNS from "../images/ProductImages/slns-i.png";
import the11_logo from "../images/ProductImages/11logo.jpg"
import { useNavigate } from "react-router-dom";
import { Col, Row } from 'reactstrap';



const Projects = () => {

  let navigate = useNavigate();

  const contactUs = () => {
    let path = '/contact-us';
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
      <div>
        <Nav />
      </div>

      <div>
        <div className='container-fluid' >
          <img src={I_bloom_carousel} alt='i homes i bloom apartments near tcs adibatla' id='car-img-3' />
          <div class="carousel-caption" id='hero'>
            <h5 id='carousal-main'>SLNS & i</h5>
            <p id='carousal-subtext'>Luxury Villa's at Manneguda.</p>
            <button onClick={contactUs} className="carousal-button">Know more</button>
          </div>
        </div>

        {/* <div className='img-fluid' id='banner-image'>

        </div> */}


        <div className='container-fluid reveal fade-bottom' id='first-block'>

          <div className='row' style={{ marginBottom: '100px' }}>
            <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12' id="ads_1" style={{ textAlign: 'center' }}>
              <img src={Bloom_1} alt="slns and i bloom luxury villas in hyderabad." className="d-block"
                id='building-images' />
            </div>

            <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12' id="ads_1" style={{ textAlign: 'center', paddingLeft: '50px', paddingRight: '50px' }}>
              <p id='projects-headline'>SLNS & I-BLOOM</p>
              <p id='subtext'>Together, let's lay the foundation for a brighter future</p>
              <p id='project-content'>We are proud to present you with a home that will fill your heart with joy and your life with luxury.
                Whether you're envisioning a new residential haven, a commercial masterpiece, or an innovative industrial facility,
                I-Bloom is here to turn your vision into reality. Welcome to a world where dreams are built with bricks and brought to life with
                passion. Together, let's lay the foundation for a brighter future.<br></br><br></br>
                Flip through the pages of this brochure to witness our diverse portfolio - from majestic residential complexes to
                state-of-the-art commercial hubs. Each project narrates a story of transformation, where ideas have flourished into iconic
                structures that serve as symbols of progress.</p>
              
              <button onClick={contactUs} className="brochure">Know more</button>
            </div>
          </div>

          <hr></hr>

          <div>
            <p id='previous-projects-text' className='reveal fade-bottom'>Our Projects</p>
          </div>

          <div className='container-fluid' id='spec-container-2'>
            <Row>
              <Col xs={12} md={6}>
                <div>
                  <img src={SLNS} alt="slns & i luxury villas specifications" className="d-block"
                    id='building-images' />
                </div>
              </Col>

              <Col xs={12} md={6}>
                <div className='reveal fade-bottom'>
                  <p id='aminities'>SLNS & I-BLOOM</p>
                  <div id='specifications-card'>
                    <ul id='Aminity-list'>
                      <p id='aminity-heading'>Aminities</p>
                      <li>Swimming Pool & Toddler Pool.</li>
                      <li>Gymnasium & 24Hr Power Backup.</li>
                      <li>Avenue Plantation & Landscape.</li>
                      <li>Main Road 50' and 40' Wide B.T Roads.</li>
                      <li>Internal Roads 30' Wide B.T Roads.</li>
                      <li>Mini Theatre.</li>
                    </ul>
                  </div>
                  <div>
                    <ul id='Aminity-list'>
                      <p id='project-specifications-text'>Project Specifications</p>
                      <li>HMDA Approved Gated Community Project.</li>
                      <li>Luxury Duplex Villas as per HMDA Approved Plan.</li>
                      <li>Built-Up Areas From 3000 SqFt To 4500 SqFt.</li>
                      <li>Entrance Arch.</li>
                      <li>Club House (Area 10,000 To 15,000 Sq.ft)</li>
                      <li>100% Vasthu Complian.t</li>
                      <li>Tennis Court.</li>
                      <li>All Round Compound Wall With Solar Fencing.</li>
                      <li>Children Park & Many more..</li>
                    </ul>
                  </div>
                </div>
                <a href={require('../images/ProductImages/SLNS.pdf')} target="_blank" rel="noreferrer">
                <button className="brochure">SLNS & I Brochure</button>
              </a>
              </Col>
            </Row>
          </div>

          <div className='container-fluid' id='spec-container'>
            <Row>
              <Col xs={12} md={6}>
                <div className='reveal fade-bottom' id='written-content'>
                  <p id='aminities'>I Homes Prarambh</p>
                  <div>
                    <ul id='Aminity-list'>
                      <p id='project-specifications-text'>Aminities</p>
                      <li>HMDA Approved Appartment.</li>
                      <li>Luxuary flat as per HMDA Approved Plan.</li>
                      <li>Vastu Compliance.</li>
                      <li>Built-up area from 1257sft to 1803sft.</li>
                      <li>Comprehensive Security System with cameras at appropriate locations.</li>
                      <li>RERA Approved.</li>
                    </ul>
                  </div>
                  <div id='specifications-card'>
                    <ul id='Aminity-list'>
                      <p id='aminity-heading'>Project Specifications</p>
                      <li><span id='aminity-head'>RCC Super Structure:</span> RCC Super Structure with 6" Thickness</li>
                      <li> <span id='aminity-head'>Bathrooms:</span>Built with 7.0 height Vetrified tiles with standard make.</li>
                      <li> <span id='aminity-head'>Painting :</span> 2cotes of Assian/Birla putty and sanding to a smooth finish, 1 coat of primer & 2 cotes ofpremium emulsion</li>
                      <li> <span id='aminity-head'>Balcony :</span> Rustic Ceramic Tiles of standard make in balconies.</li>
                      <li> <span id='aminity-head'>Parking:</span> equipped with Natural Stone / parking Tiles of standard make.</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <a href={require('../images/ProductImages/brochure.pdf')} target="_blank" rel="noreferrer">
                    <button className="brochure">"Prarambh" Brochure</button>
                  </a>
                </div>
              </Col>

              <Col xs={12} md={6}>
                <div>
                  <img src={prarambh} alt="i homes prarambh adibatla floor plan details" className="d-block"
                    id='building-images' />
                </div>
              </Col>
            </Row>
          </div>

          <hr></hr>

          <p id='upcoming-projects-text' className='reveal fade-bottom'>Our Upcoming Projects</p>

          <div className='container-fluid' id='spec-container-2'>
            <Row>
              <Col xs={12} md={6}>
                <div>
                  <img src={I_Bloom} alt="slns & i luxury villas specifications" className="d-block"
                    id='building-images' />
                </div>
              </Col>

              <Col xs={12} md={6}>
                <div className='reveal fade-bottom'>
                  <img src={the11_logo} alt='i homes the 11 luxury apartments' id='the-logo'/>
                  <div id='specifications-card'>
                    <ul id='Aminity-list'>
                      <p id='aminity-heading'>Aminities</p>
                      <li>Club House & Gym</li>
                      <li>Grand Entry Lounge</li>
                      <li>Indore Games</li>
                      <li>Preview Theatre & Coffe Lounge</li>
                      <li>2 guest Rooms & 2 Rooms For Meetings.</li>
                      <li>Multi-purpose Hall & Conference Hall</li>
                    </ul>
                  </div>
                  <div>
                    <ul id='Aminity-list'>
                      <p id='project-specifications-text'>Project Features</p>
                      <li>Avenue Plantation & Pollution free Environment</li>
                      <li>Walking Track, Children Play Area & Yoga, Meditation Room.</li>
                      <li>Cricket Pitch.</li>
                      <li>EV Charging Station, 24x7 CCTV Surveillance.</li>
                      <li>Earthquake Resistant Design with Fire & Safety Features.</li>
                      <li>100% Vasthu Compliant</li>
                      <li>Strategic Location in Prime Area.</li>
                      <li>Excellent Ventilation for Fresh Air.</li>
                      <li>Mygate App, Guest Parking & Many more..</li>
                    </ul>
                  </div>
                </div>
                <a href={require('../images/ProductImages/the11new.pdf')} target="_blank" rel="noreferrer">
                  <button className="brochure">"The 11" Brochure</button>
                </a>
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

export default Projects