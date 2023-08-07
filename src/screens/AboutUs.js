import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import contact from '../images/ProductImages/Building.jpg';


const AboutUs = () => {
    return (
        <>
            <div>
                <Nav />
            </div>

            <div className='container'>
                <div className='row' >

                    <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12' id="ads_1" style={{ textAlign: 'center' }}>
                        <img src={contact} alt="New York" className="img-fluid"
                            style={{ width: 'auto', height: '500px' }} />
                    </div>

                    <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12' id="ads_1" style={{ textAlign: 'center', paddingLeft: '50px', paddingRight: '50px' }}>
                        <h3 style={{ marginBottom: '50px' }}>About US</h3>

                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        Auctus Technologies is a skilled and dynamic company engaged in Human Resource Consulting services, 
                        primarily concentrating on Information Technology, ITES, BPO services. Auctus Technologies is serving
                        some of the world’s finest organizations. Committed to achieve maximum customer satisfaction, we offer
                        personalized executive recruitment services with the objective of meeting the individual specific
                        requirements of our clients in a most efficient manner. Our team adheres to the norms, work culture
                        and the code of ethics of our clients.
                        </div>

                    </div>

                </div>
            </div>

            <div>
                <Footer />
            </div>
        </>
    )
}

export default AboutUs