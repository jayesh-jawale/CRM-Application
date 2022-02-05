import { LoginPage } from '../components/LoginPage';
import React from 'react';
import {useState} from 'react';
import './entryPage.css';
import { PasswordReset } from '../components/PasswordReset';

export const EntryPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loadForm, setLoadForm] = useState('login');

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

    const handleOnSubmit = (e) => {
        e.preventDefault()
        if(!email || !password) {
           return alert('Fill Details')
        }
    }

    const handleOnResetSubmit = (e) => {
        e.preventDefault()
        if(!email) {
           return alert('Fill Details')
        }
    }

    const switchForm = (formType) => {
        setLoadForm(formType)
    }

    return (
        <div className='login-page bg-info'>
            {loadForm === 'login' && 
            <LoginPage handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            switchForm={switchForm}
            email={email}
            password={password}
            />}
            {loadForm === 'reset' &&
            <PasswordReset handleOnChange={handleOnChange}
            switchForm={switchForm}
            handleOnResetSubmit={handleOnResetSubmit}
            email={email}
            />}
        </div>
    )
}