import {Form, Button, Spinner, Alert} from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {loginPending, loginSuccess, loginFail} from '../slices/loginSlice';
import {userLogin} from '../components/loginAction';
import { useHistory } from "react-router-dom";

export const LoginPage = ({ switchForm }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const dispatch = useDispatch();
    const history = useHistory();
    const {isLoading, isAuth, error} = useSelector((state) => state.login)

    const handleOnChange = (e) => {
        const {name, value} = e.target;

        switch(name) {
            case "email":
                setEmail(value)
                break;
            case "password":
                setPassword(value)
                break;
                default:
                break
        }
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        if(!email || !password) {
           return alert('Fill Details')
        }

        dispatch(loginPending());

        try {
            const isAuth = await userLogin({ email, password })
            console.log(isAuth);
            if(isAuth.status === "error") {
               return dispatch(loginFail(isAuth.message))
            }
            dispatch(loginSuccess())
            history.push("/dashboard");
        } catch (error) {
            dispatch(loginFail(error.message))
        }
    }
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
                {isLoading && <Spinner animation="border" />}
                <hr/>

                <a href='#' onClick={() => switchForm('reset')}>Forgot Password</a>
            </Form>
    )
}

LoginPage.propTypes = {
    switchForm: PropTypes.func.isRequired,
}