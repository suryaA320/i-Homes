/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import * as Icon from 'react-bootstrap-icons';
import '../App.css';
import { useNavigate } from "react-router-dom";
import logo from '../images/carousImages/Logo-ihomes.png'


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

    const ourProjects = () => {
        let path = '/our-projects';
        navigate(path);
    }

    return (
        
        <nav class="navbar navbar-expand-sm  fixed-top" style={{ padding: '0px' }} id='nav-bar'>
            <div class="container-fluid">
                <a className="navbar-brand" id='navbar-brand' type='button' style={{ marginLeft: '20px' }} onClick={homePage}>
                    <img src={logo} alt='i homes prarambh' width={70} id='logo-image'/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" id='toggles-icon'>
                    <span className="navbar-toggler-icon" ></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
                    <ul className="navbar-nav" >
                        <li className="nav-item">
                            <a type='button' className="nav-links" onClick={homePage}>Home</a>
                            {/* <button className="nav-links" onClick={homePage}>Home</button> */}
                        </li>
                        <li className="nav-item">
                            <a type='button' className="nav-links" onClick={ourProjects}>Our Projects</a>
                        </li>
                        <li className="nav-item">
                            <a type='button' onClick={aboutUs}  className="nav-links">About us</a>
                        </li>
                        <li className="nav-item">
                            <a type='button' onClick={contactUs} className="nav-links">Contact us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Nav;