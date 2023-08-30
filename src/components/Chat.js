/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Input, Button, Row } from 'reactstrap';
import * as Icon from 'react-bootstrap-icons';


const Chat = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [formData, setFormData] = useState({
        customerName: '',
        enquiry: ''
    })

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const submitHandler = (e) => {
        const whatsappMessage = `This is "I-Home Enquiry", Name : ${formData.customerName}. Enquiry : ${formData.enquiry}`;
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappLink = `https://wa.me/917997797474?text=${encodedMessage}`;
        window.open(whatsappLink, '_blank');
    }

    return (
        <div>
            <a type='button' id='myBtn' onClick={toggle}><Icon.Whatsapp id='whatsappIcon' /></a>
            <Modal isOpen={modal} toggle={toggle} id='modal'>
                <ModalHeader toggle={toggle}>Connect With us</ModalHeader>
                <ModalBody>
                    <form onSubmit={submitHandler}>
                        <Row style={{ padding: '20px' }} >
                            <Input type='text' name='customerName' value={formData.customerName} onChange={changeHandler} placeholder='Enter your name' required />
                        </Row>
                        <Row style={{ padding: '20px' }} >
                            <Input type='text' name='enquiry' value={formData.enquiry} onChange={changeHandler} placeholder='Enter your enquiry..' required />
                        </Row>
                        <Button type='submit'>submit</Button>
                    </form>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default Chat;