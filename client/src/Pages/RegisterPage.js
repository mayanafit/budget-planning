import React from 'react';
import { FormLogReg } from '../Components';
import logo from '../assets/logo.png';

const RegisterPage = () => {
    return (
        <section className="register">
            <div className="register__image">
                <img src={logo} width={250} alt="logo-budgetme" />
            </div>
            <div>
                <FormLogReg page="Register"/>
            </div>
        </section>
    )
}

export default RegisterPage