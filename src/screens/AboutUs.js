import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import contact from '../images/ProductImages/Building.jpg';


const AboutUs = () => {

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

            <div className='container-fluid' >
                <div className='row' >
                    <div></div>

                    <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12' id="ads_2" style={{ textAlign: 'center' }}>
                        <img src={contact} alt="i homes prarambh" className="img-fluid"
                            style={{ borderRadius: '20px' }} id='building-images'/>
                    </div>

                    <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12' id="ads_2" style={{ textAlign: 'center', paddingLeft: '50px', paddingRight: '50px', backgroundColor: '#222222', borderRadius: '20px' }}>
                        <h3 id='contact-us-letter' style={{ marginBottom: '50px' }}>About US</h3>

                        <div id='About-us-content'>
                        At i homes Prarambh, we are dedicated to transforming architectural visions into
                        exceptional living spaces. With a proven track record of excellence, our company stands as a 
                        cornerstone in the construction industry, specializing in crafting modern and functional apartment 
                        complexes that meet the diverse needs of today's urban residents. Our mission is to create 
                        superior-quality apartment buildings that not only reflect innovative design and construction 
                        techniques but also prioritize sustainability, safety, and comfort. We believe in turning our 
                        clients' dreams into reality by delivering meticulously planned and expertly executed projects that 
                        enhance communities and contribute to a higher quality of life.
                        </div>

                    </div>

                </div>
            </div>

            {/* <div className='container'>
                <div id='left'></div>
                <div id='right'>
                    <div id='overlap-content'>
                        <h3>Hello Header</h3>
                        <p>dummy text</p>
                        <a href='www.google.com'></a>
                    </div>
                </div>
            </div> */}

            <div>
                <Footer />
            </div>
        </>
    )
}

export default AboutUs