import React, { useEffect } from 'react';
import logo from '../assets/logo.png';
import { GoSignOut } from 'react-icons/go';
import { Switch, Route, Link, useHistory } from 'react-router-dom';
import { AddPage, Balance } from '../Pages';
import { useDispatch, useSelector } from 'react-redux';
import { setStatus, fetchBudget } from '../store/action';

const Dashboard = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { login } = useSelector(state => state)
    useEffect(() => {
        dispatch(fetchBudget())
    },[dispatch])
    useEffect(() => {
        if (!login) history.push(`/`)
    }, [login, history])
    const logout = () => {
        dispatch(setStatus(false))
        localStorage.clear()   
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