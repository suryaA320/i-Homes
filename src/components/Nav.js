/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import * as Icon from 'react-bootstrap-icons';
import '../App.css';
import { useNavigate } from "react-router-dom";
import logo from '../images/carousImages/Logo-ihomes.jpg'


const Nav = () => {

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
        <div className="container-fluid" style={{paddingLeft:'0px', paddingRight:'0px', backgroundColor:'black'}}>
            <div className='top-navbar'>
                <nav className="navbar navbar-default" role="navigation">

                    <a className="navbar-brand" type='button' style={{marginLeft: '20px'}} onClick={homePage}>
                        <img src={logo} alt='i homes prarambh' width={100}/>
                    </a>

                    <ul className="nav">
                        <li className="nav-item">
                            <a type='button' className="links" style={{color:'white'}} onClick={homePage}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a type='button' className="links" style={{color:'white'}} onClick={homePage}>Location</a>
                        </li>
                        <li className="nav-item">
                            <a type='button' onClick={aboutUs} style={{color:'white'}} className="links">About us</a>
                        </li>
                        <li className="nav-item">
                            <a type='button' onClick={contactUs} style={{color:'white'}} className="links">Contact us</a>
                        </li>
                    </ul>


                    <div className='icons'>

                    </div>
                </nav>
            </div>

        </div>

    )
}

export default Nav;