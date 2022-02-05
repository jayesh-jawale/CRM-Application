import {Form, Button} from 'react-bootstrap';
import { PropTypes } from 'prop-types';

export const PasswordReset = ({handleOnChange, handleOnResetSubmit, switchForm, email}) => {
    return (
            <Form autoComplete='off' onSubmit={handleOnResetSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                     onChange={handleOnChange} type="email" name="email"
                    value={email} placeholder="Enter email" />
                </Form.Group>

                <hr />
                <Button variant="primary" type="submit">
                    Reset
                </Button>
                <hr/>

                <a href='#' onClick={() => switchForm('login')}>Login Now</a>
            </Form>
    )
}

PasswordReset.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    switchForm: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
}