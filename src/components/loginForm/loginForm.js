// import { Component } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./loginForm.css";

function LoginForm({ checkLoginData }) {

    return (
        <Form className="form"
            onSubmit={checkLoginData}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"
                    name="email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"
                    name="password" />
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






























// class AuthentificationForm extends Component {

//     state = {
//         email: "",
//         password: ""
//     }

//     onValueChange = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }

//     onSubmit = (e) => {
//         e.preventDefault();
//         if (this.state.email.length < 3 || !this.state.salary) return;
//         this.props.onAdd(this.state.name, this.state.salary);
//         this.setState({
//             email: "",
//             password: ""
//         })
//     }

//     render() {
//         const { email, password } = this.state;
//         return (
//             <Form className="authentification-form"
//                 onSubmit={this.onSubmit}>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Email address</Form.Label>
//                     <Form.Control type="email" placeholder="Enter email"
//                         name="email"
//                         onChange={this.onValueChange} />
//                     <Form.Text className="text-muted">
//                         We'll never share your email with anyone else.
//                     </Form.Text>
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control type="password" placeholder="Password"
//                         name="password"
//                         onChange={this.onValueChange} />
//                 </Form.Group>
//                 <Button variant="primary" type="submit">
//                     Submit
//                 </Button>
//                 <Col md={{ span: 6, offset: 7 }}>
//                     <p className="register-now ">
//                         Or <a href="#">register now</a>
//                     </p>
//                 </Col>
//             </Form>
//         )
//     }
// }

// export default AuthentificationForm;