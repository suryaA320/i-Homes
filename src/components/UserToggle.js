/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Card, CardBody } from 'reactstrap';
import { useNavigate } from "react-router-dom";


const UserToggle = () => {

    let navigate = useNavigate();

    const tracker = () => {
        let path = '/tracking';
        navigate(path)
    };

    const myAccountPage = () => {
        let path =  `/my-account`;
        navigate(path);
    }

  return (
    <div className='profile-toggle-card'>
        <Card>
            <CardBody>
                <div style={{display:'flex', flexDirection:'column'}}>
                    <a className='toggle-items' type='button' onClick={myAccountPage}><p>My Account</p></a>
                    <a className='toggle-items' type='button'><p>My Orders</p></a>
                    <a className='toggle-items' type='button' onClick={tracker}><p>Order Tracker</p></a>
                    <a className='toggle-items' type='button'><p>logout</p></a>
                </div>
            </CardBody>
        </Card>
    </div>
  )
}

export default UserToggle;