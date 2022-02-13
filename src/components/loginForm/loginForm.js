import { Form, Button, Col } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./loginForm.css";

function LoginForm({ checkLoginData }) {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        } else {
            console.log("Вход");
            checkLoginData(e)
        }

        setValidated(true);

    };

    return (
        <Form className="form"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    required
                    type="email"
                    placeholder="Enter email"
                    name="email" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    required
                    type="password"
                    placeholder="Password"
                    name="password" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit">
                Sign In
            </Button>
            <Col md={{ span: 6, offset: 7 }}>
                <p className="register-now ">
                    Or <Link to="/register">register now</Link>
                </p>
            </Col>
        </Form>
    )
}

export default LoginForm;