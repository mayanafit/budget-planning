import React from 'react';
import logo from '../assets/logo.png';
import { GoSignOut } from 'react-icons/go';
import { Switch, Route, Link } from 'react-router-dom';
import { AddPage, Balance } from '../Pages';


const Dashboard = (props) => {
    const logout = () => {
        localStorage.clear()
        props.history.push(`/`)
    }
    return(
        <section className="dashboard">
            <header>
                <nav className="flex flex-jc-sb flex-ai-c">
                    <div>
                        <Link to="/dashboard"><img src={logo} width="150" alt="logo-budgetme"/></Link>
                    </div>
                    <div className="flex flex-ai-c">
                        <span style={{marginRight: '10px'}}>Hello, <b>{localStorage.name}</b></span>
                        <button onClick={logout} className="flex flex-ai-c flex-jc-c">
                            <span>Logout</span> 
                            <GoSignOut className="sign" />
                        </button>
                    </div>
                </nav>
            </header>
            <Switch>
                <Route exact path='/dashboard' component={Balance}/>
                <Route exact path='/dashboard/expenses' component={AddPage}/>
                <Route exact path='/dashboard/incomes' component={AddPage}/>
            </Switch>
        </section>
    )
}

export default Dashboard