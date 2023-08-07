/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Card, CardBody, CardHeader, Col, Input, Label, Row } from 'reactstrap';
import { useNavigate } from "react-router-dom";


const Register = () => {

    const [registrationData, setRegistrationData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobileNum: '',
        password: '',
        confirmPassword: '',
        addLine1: '',
        city: '',
        state: '',
        pin: ''
    });

    let navigate = useNavigate();

    const loginPageRedirect = () => {
        let path = `/login`;
        navigate(path);
    }

    const registrationHandler = (e) => {
        setRegistrationData({ ...registrationData, [e.target.name]: e.target.value });
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Registered User : ", registrationData)
    }


    return (
        <>
            <div className='login-screen'>
                <div className='container'>
                <Card className='m-auto' style={{ width: 'auto', height: 'auto', top: '100px', borderRadius: '20px' }}>
                    <CardHeader style={{ textAlign: 'center', fontSize: '22px' }}>
                        <p>YORK</p>
                    </CardHeader>
                    <CardBody>
                        <form onSubmit={handleSubmit}>
                            <div >
                                <div style={{ margin: '10px' }}>
                                    <Row>
                                        <Col xs={12} md={6}>
                                            <Label>First name</Label>
                                            <Input name='firstName' value={registrationData.firstName} onChange={registrationHandler} type='text' placeholder='First name..' />
                                        </Col>
                                        <Col xs={12} md={6}>
                                            <Label>Last name</Label>
                                            <Input name='lastName' value={registrationData.lastName} onChange={registrationHandler} type='text' placeholder='Last name..' />
                                        </Col>
                                    </Row>

                                </div>
                                <div style={{ margin: '10px', marginTop: '20px' }}>
                                    <Row>
                                        <Col xs={12} md={6}>
                                            <Label>Email</Label>
                                            <Input name='email' value={registrationData.email} onChange={registrationHandler} type='email' placeholder='Email..' />
                                        </Col>
                                        <Col xs={12} md={6}>
                                            <Label>Mobile Number</Label>
                                            <Input name='mobileNum' value={registrationData.mobileNum} onChange={registrationHandler} type='text' placeholder='mobile number..' />
                                        </Col>
                                    </Row>

                                </div>
                                <div style={{ margin: '10px', marginTop: '20px' }}>
                                    <Row>
                                        <Col xs={12} md={6}>
                                            <Label>Password</Label>
                                            <Input name='password' value={registrationData.password} onChange={registrationHandler} type='password' placeholder='password..' />
                                        </Col>
                                        <Col xs={12} md={6}>
                                            <Label>Confirm Password</Label>
                                            <Input name='confirmPassword' value={registrationData.confirmPassword} onChange={registrationHandler} type='password' placeholder='Confirm password..' />
                                        </Col>
                                    </Row>
                                </div>
                                <div style={{ margin: '10px', marginTop: '20px' }}>
                                    <Row>
                                        <Col xs={12} md={12}>
                                            <Label>Address Line 1</Label>
                                            <Input name='addLine1' value={registrationData.addLine1} onChange={registrationHandler} type='text' placeholder='address line 1..' />
                                        </Col>
                                    </Row>
                                </div>
                                <div style={{ margin: '10px', marginTop: '20px' }}>
                                    <Row>
                                        <Col xs={12} md={4}>
                                            <Label>City/Town</Label>
                                            <Input name='city' value={registrationData.city} onChange={registrationHandler} type='text' placeholder='address..' />
                                        </Col>
                                        <Col xs={12} md={4}>
                                            <Label>State</Label>
                                            <Input name='state' value={registrationData.state} onChange={registrationHandler} type='text' placeholder='address..' />
                                        </Col>
                                        <Col xs={12} md={4}>
                                            <Label>Pin</Label>
                                            <Input name='pin' value={registrationData.pin} onChange={registrationHandler} type='text' placeholder='address..' />
                                        </Col>
                                    </Row>
                                </div>
                                <div style={{ margin: '10px', marginTop: '70px' }}>
                                    <button type='submit' className='register-button'>register</button>
                                </div>
                                <div style={{ float: 'right', fontSize: '14px', marginRight: '30px' }}>
                                    <span style={{ marginRight: '10px' }}>Already a member?</span><a type='button' href='#' onClick={loginPageRedirect} >sign in</a>
                                </div>
                            </div>
                        </form>

                    </CardBody>
                </Card>
                </div>
                
            </div>


        </>
    )
}

export default Register