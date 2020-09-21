import React, { useEffect } from 'react';
import { FormLogReg } from '../Components';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setStatusRegister } from '../store/action';
import logo from '../assets/logo.png';
import landing from '../assets/landing-image.png';


const LoginPage = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { login } = useSelector(state => state)
    useEffect(() => {
        dispatch(setStatusRegister(false))
    },[dispatch])
    useEffect(() => {
        if (login) history.push(`/dashboard`)
    },[login, history])
    return(
        <section className="login flex">
            <div>
                <div className="login__landing flex flex-fd-c flex-ai-c">
                    <header>
                        <h1>Budget at <span>ease</span>. Budget <span>anywhere.</span></h1>
                    </header>
                    <img src={landing} width="600" alt="landing" />
                </div>
            </div>
            <div className="login__main">
                <div className="login__logo">
                    <img src={logo} width="250" alt="logo-budgetme" />
                </div>
                <FormLogReg page="Login"/>
            </div>
        </section>
    )
}

export default LoginPage