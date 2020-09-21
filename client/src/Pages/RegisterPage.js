import React, {useEffect} from 'react';
import { FormLogReg } from '../Components';
import logo from '../assets/logo.png';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RegisterPage = () => {
    const history = useHistory()
    const { register } = useSelector(state => state)
    useEffect(() => {
        if (register) history.push(`/`)
    },[register, history])
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