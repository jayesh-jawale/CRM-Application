import React, {useState, useEffect} from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const initialValues = {
  fullName : "",
  phone : "",
  email : "",
  companyName : "",
  address : "",
  password : "",
  confirmPassword : "",
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
    console.log(newUser);
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
              <Form noValidate onSubmit={handleOnSubmit}>
                <Form.Group className="mb-3" controlId="validationFormik01">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="fullName"
                    value={newUser.fullName}
                    onChange={handleOnChange}
                    placeholder="Your name"
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
                   />
                </Form.Group>

                <Form.Group className="mb-3" controlId="validationFormik04">
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="companyName"
                    value={newUser.companyName}
                    onChange={handleOnChange}
                    placeholder="Company Name"
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
