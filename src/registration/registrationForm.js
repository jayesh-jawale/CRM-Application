import React, {useState, useEffect} from "react";
import { Container, Row, Col, Form, Button, Alert, Spinner } from "react-bootstrap";

import {userRegistration} from '../registration/userRegistrationAction';
import { useDispatch, useSelector } from "react-redux";

const initialValues = {
  name : "Rohit Sharma",
  phone : "1234567890",
  email : "rohit.sharma@example.com",
  company : "Mumbai Indians",
  address : "Wankhede Stadium",
  password : "Password@123",
  confirmPassword : "Password@123",
}

const passwordVerification = {
  isLenthy: false,
  hasUpperCase: false,
  hasLowerCase: false,
  hasNumber: false,
  hasSpecialCharacter: false,
  confirmPassword: false,
}

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const {isLoading, status, message} = useSelector((state) => state.registration)

  const [newUser, setNewUser] = useState(initialValues);
  const [passwordError, setPasswordError] = useState(passwordVerification);

  useEffect(() => {}, [newUser])

  const handleOnChange = (e) => {
    const {name, value} = e.target;

    // Taking name in [] will act as an variable, if we write only name : value will take key.
    setNewUser({...newUser, [name] : value});

    if(name === "password") {
      const isLenthy = value.length > 8;
      const hasUpperCase = /[A-Z]/.test(value);
      const hasLowerCase = /[a-z]/.test(value);
      const hasNumber = /[0-9]/.test(value);
      const hasSpecialCharacter = /[@,#,$,%,&]/.test(value);

    setPasswordError({
      ...passwordError,
      isLenthy,
      hasUpperCase,
      hasLowerCase,
      hasNumber,
      hasSpecialCharacter,
    })
  };

  if(name === "confirmPassword") {
    setPasswordError({
      ...passwordError,
      confirmPassword: newUser.password === value
    })
  }
};

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email, company, address, password } = newUser;

    const newRegistration = {
      name,
      phone,
      email,
      company,
      address,
      password,
    };
    dispatch(userRegistration(newRegistration));
    console.log(newRegistration);
  }

  return (
        <Container>
          <Row>
            <Col>
              <h1>Registration Form</h1>
            </Col>
          </Row>
          <hr />

          <Row>
            <Col>
              {message && <Alert>{message}</Alert>}
            </Col>
            </Row>

          <Row>
            <Col>
              <Form noValidate onSubmit={handleOnSubmit}>
                <Form.Group className="mb-3" controlId="validationFormik01">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={newUser.name}
                    onChange={handleOnChange}
                    placeholder="Your name"
                    required
                  />
                </Form.Group>

               <Form.Group className="mb-3" controlId="validationFormik02">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="number"
                    name="phone"
                    value={newUser.phone}
                    onChange={handleOnChange}
                    placeholder="Phone"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="validationFormik03">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={newUser.email}
                    onChange={handleOnChange}
                    placeholder="Email"
                    required
                   />
                </Form.Group>

                <Form.Group className="mb-3" controlId="validationFormik04">
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="company"
                    value={newUser.company}
                    onChange={handleOnChange}
                    placeholder="Company Name"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="validationFormik05">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    value={newUser.address}
                    onChange={handleOnChange}
                    placeholder="Address"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="validationFormik06">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={newUser.password}
                    onChange={handleOnChange}
                    placeholder="Password"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="validationFormik07">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    value={newUser.confirmPassword}
                    onChange={handleOnChange}
                    placeholder="Confirm Password"
                    required
                  />
                </Form.Group>

                <ul>
                  <li className={passwordError.isLenthy ? "text-success" : "text-danger" }>
                    Min 8 characters
                  </li>
                  <li className={passwordError.hasUpperCase ? "text-success" : "text-danger" }>
                    Atleast one upper case
                  </li>
                  <li className={passwordError.hasLowerCase ? "text-success" : "text-danger" }>
                  Atleast one lower case
                  </li>
                  <li className={passwordError.hasNumber ? "text-success" : "text-danger" }>
                  Atleast one number
                  </li>
                  <li className={passwordError.hasSpecialCharacter ? "text-success" : "text-danger" }>
                  Atleast one special character
                  </li>
                </ul>

                <Button type="submit" disabled={Object.values(passwordError).includes(false)}>Submit form</Button>
                {isLoading && <Spinner variant="info" animation="border" />}
              </Form>
            </Col>
          </Row>

          <Row className="py-4">
        <Col>
          Already have an account <a href="/">Login Now</a>
        </Col>
      </Row>
        </Container>
  );
};
