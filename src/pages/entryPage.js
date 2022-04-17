import { LoginPage } from '../components/LoginPage';
import React from 'react';
import {useState} from 'react';
import './entryPage.css';
import { PasswordReset } from '../components/PasswordReset';

export const EntryPage = () => {
    const [loadForm, setLoadForm] = useState('login');

    const handleOnResetSubmit = (e) => {
        e.preventDefault()
    }

    const switchForm = (formType) => {
        setLoadForm(formType)
    }

    return (
        <div className='login-page bg-info'>
            <div className='mt-5 mb-5'>
            <div className='form-box'>
            {loadForm === 'login' && 
            <LoginPage
            switchForm={switchForm}
            />}
            {loadForm === 'reset' &&
            <PasswordReset
            // handleOnChange={handleOnChange}
            switchForm={switchForm}
            handleOnResetSubmit={handleOnResetSubmit}
            // email={email}
            />}
        </div>
        </div>
        </div>
    )
}