import React from 'react';
import { FormLogReg } from '../Components';
import logo from '../assets/logo.png';
import landing from '../assets/landing-image.png';

const LoginPage = () => {
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