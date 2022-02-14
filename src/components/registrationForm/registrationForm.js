import { Form, Row, InputGroup, Col, Button } from "react-bootstrap";
import { useState } from "react";
import { Link, useHistory, Router } from "react-router-dom";

import GetDate from "../getDate/getDate";
import "./registrationForm.css";

function RegistrationForm({ addUser, usersData }) {

    const [validated, setValidated] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        form.checkValidity() === false
            ? e.stopPropagation()
            : checkSameName(e);

        setValidated(true);
    };

    const checkSameName = (e) => {
        let checkTheSame = false;
        const currentDate = GetDate();
        usersData.forEach(item => {
            if (item.email === e.target.email.value) {
                checkTheSame = true;
            }
        });
        if (checkTheSame) {
            alert("A user with this email address is already registered. Please choose another email")
        } else {
            addUser(e, currentDate);
            history.push("/login");
        }
    }

    return (
        <div className="container">
            <Form className="form"
                noValidate
                validated={validated}
                onSubmit={handleSubmit}>
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
                        Already have an account? <Link to="/login">Sing In</Link>
                    </p>
                </Col>
            </Form>
            <Router history={history} />
        </div>
    )
}

export default RegistrationForm;