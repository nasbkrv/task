import React, { useState} from 'react'
import { Form, Button, Alert } from 'react-bootstrap'

export default function VerticalGrayForm() {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const [show, setShow] = useState(false);
    let [alertHeading, setAlertHeading] = useState(null)
    let [alertText, setAlertText] = useState(null)
    let overlay;

    if (show) {
        overlay = <div className="overlay">
        </div>
    }

    function checkEmail() {
        if (!emailRegex.test(document.querySelectorAll('.form-input')[0].value)) {
            setAlertHeading('Error!');
            setAlertText('Invalid email, please try again');
        } else {
            setAlertHeading('Congrats!');
            setAlertText('You have subscribed to our newsletter.Please check your email');
            document.querySelectorAll('.form-input')[0].value = '';
            console.log('You found your new intern 😎')
        }
        setShow(true)
    }
    function AlertDismissible() {
        return (
            <>
                <Alert show={show} variant="success">
                    <Alert.Heading className="text-center">{alertHeading}</Alert.Heading>
                    <p className="mt-4 text-center">{alertText}</p>
                    <div className="d-flex justify-content-end">
                        <Button
                            onClick={() => setShow(false)} variant="outline-success">
                            Close
                </Button>
                    </div>
                </Alert>
            </>
        );
    }

    return (
        <>
            <div className="d-flex justify-content-center fixed-top mt-10 "
                style={{
                    top: '100px'
                }}>
                <AlertDismissible className="alert" />
            </div>
            <div className="header-vertical-gray-form">
                <Form className="form-wraper">
                    <Form.Group>
                        <Form.Label className="form-label">Lorem ipsum dolor sit amet</Form.Label>
                        <Form.Control
                            className="form-input"
                            type="email"
                            placeholder="EMAIL"/>
                        <Button
                            className="form-btn"
                            value="Lorem ipsum dolor sit amet"
                            onClick={() => checkEmail()}>
                            Lorem ipsum dolor sit amet
                        </Button>
                    </Form.Group>
                </Form>
            </div>

            {overlay}

        </>
    )
    
}