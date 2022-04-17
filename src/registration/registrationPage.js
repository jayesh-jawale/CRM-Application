import { RegistrationForm } from './registrationForm'
import './registration.css'

export const Registration = () => {
    return (
        <div className='registration'>
            <div className='mt-5 mb-5'>
            <div className='form-box'>
                <RegistrationForm />
            </div>
            </div>
        </div>
    )
}