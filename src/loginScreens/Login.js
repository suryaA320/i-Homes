/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader, Input, Label } from 'reactstrap';
import * as Icon from 'react-bootstrap-icons';
import { useNavigate } from "react-router-dom";

// third party
import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../store/reducers/auth';
import { clearMessage } from '../store/reducers/message';
import { login } from '../store/reducers/auth';

const Login = () => {

    const { message } = useSelector((state) => state.message);
    const [successful, setSuccessful] = useState(false);
    const [showDialog, setShowDialog] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);

    const [level, setLevel] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = React.useState(false);


    const registerPageRedirect = () => {
        let path = `/register`;
        navigate(path);
    }

    return (
        <>
            <div className='login-screen'>
                <Card className='m-auto' style={{ width: '300px', height: '550px', top: '200px', borderRadius: '20px' }}>
                    <CardHeader style={{ textAlign: 'center', fontSize: '22px' }}>
                        <p>YORK</p>
                    </CardHeader>
                    <CardBody>
                        <Formik
                            initialValues={{
                                userName: 'info@autogriffin.com',
                                password: '123456',
                                submit: null
                            }}
                            validationSchema={Yup.object().shape({
                                userName: Yup.string().max(255).required('userName is required'),
                                password: Yup.string().max(255).required('Password is required')
                            })}
                            onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                                const { userName, password } = values;
                                setLoading(true);

                                dispatch(login({ userName, password }))
                                    .unwrap()
                                    .then(() => {
                                        navigate('/dashboard');
                                        setStatus({ success: false });
                                        setSubmitting(false);
                                    })
                                    .catch(() => {
                                        setLoading(false);
                                        setStatus({ success: false });
                                        setErrors({ submit: message });
                                        setSubmitting(false);
                                    });
                            }}

                        >
                            {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                                <Form noValidate onSubmit={handleSubmit}>
                                    <div >
                                        <div style={{ margin: '10px' }}>
                                            <Label>Email</Label>
                                            <Input id="userName" name='userName' type='email' placeholder='email..' />
                                        </div>
                                        <div style={{ margin: '10px', marginTop: '20px' }}>
                                            <Label>Password</Label>
                                            <Input id="password" name='password' type='password' placeholder='password..' />
                                        </div>
                                        <div style={{ margin: '10px', marginTop: '70px' }}>
                                            <button type='submit' className='login-button'>login</button>
                                        </div>
                                        <div style={{ float: 'right', fontSize: '14px', marginRight: '30px' }}>
                                            <span style={{ marginRight: '10px' }}>Don't have an account?</span><a type='button' href='#' onClick={registerPageRedirect} >sign up</a>
                                        </div>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                        <hr style={{ marginTop: '50px' }}></hr>
                        <div style={{ textAlign: 'center' }}>
                            <p>Login using Gmail</p>
                            <div>
                                <button className='google-button'><Icon.Google /></button>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>


        </>
    )
}

export default Login