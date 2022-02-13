import { Form, Row, InputGroup, Col, Button } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./registrationForm.css";

function RegistrationForm({ addUser }) {

    const [validated, setValidated] = useState(false);
    // let currentDate;
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    // function getDate() {
    //     const newDate = new Date();
    //     const hours = newDate.getHours();
    //     const minutes = newDate.getMinutes();
    //     const day = newDate.getDate();
    //     const month = newDate.getMonth() + 1;
    //     const year = newDate.getFullYear();
    //     currentDate = `${hours}:${minutes} ${day}.${month}.${year}`
    //     return currentDate;
    // }
    // getDate();

    return (
        <div className="container">
            <Form className="form" noValidate validated={validated} onSubmit={addUser}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="First name"
                            defaultValue="Mark"
                            name="name"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Last name"
                            defaultValue="Otto"
                            name="surname"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Row} md="4" controlId="validationCustomUsername">
                        <Form.Label>Username</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                aria-describedby="inputGroupPrepend"
                                name="email"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please choose a username.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Row} md="4" controlId="validationCustomPassword">
                        <Form.Label>Password</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">*</InputGroup.Text>
                            <Form.Control
                                type="Password"
                                placeholder="Password"
                                aria-describedby="inputGroupPrepend"
                                name="password"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please choose a password.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>

                </Row>

                <Form.Group className="mb-3">
                    <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                    />
                </Form.Group>
                <Button type="submit">Sign Up</Button>
                <Col md={{ span: 6, offset: 7 }}>
                    <p className="sign-in">
                        Already have an account? <Link to="/userslist">Sing In</Link>
                    </p>
                </Col>
            </Form>
        </div>
    )
}

export default RegistrationForm;