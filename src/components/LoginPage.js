import {Form, Button} from 'react-bootstrap';
import { PropTypes } from 'prop-types';

export const LoginPage = ({handleOnChange, handleOnSubmit,switchForm, email, password}) => {
    return (
            <Form autoComplete='off' onSubmit={handleOnSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                     onChange={handleOnChange} type="email" name="email"
                    value={email} placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                     onChange={handleOnChange} type="password" name="password"
                    value={password} placeholder="Password" />
                </Form.Group>
                <hr />
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <hr/>

                <a href='#' onClick={() => switchForm('reset')}>Forgot Password</a>
            </Form>
    )
}

LoginPage.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    switchForm: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
}