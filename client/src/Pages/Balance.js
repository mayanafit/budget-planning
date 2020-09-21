import React, { useEffect } from 'react';
import { GrMoney } from 'react-icons/gr';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBudget, setAdd } from '../store/action';

const Balance = (props) => {
    const { lists } = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchBudget())
        dispatch(setAdd(false))
    },[dispatch])
    const toPageExpense = () => {
        props.history.push(`/dashboard/expenses`)
    }
    const toPageIncome = () => {
        props.history.push(`/dashboard/incomes`)
    }
    return (
        <>
            <div className="dashboard__balance">
                <h3><u>Current Balance</u></h3>
                <div className="amount flex flex-ai-c">
                    <GrMoney /> 
                    <h4>{lists.length > 0 ? lists.reduce((total, current) => {return total + current.amount}, 0).toLocaleString() : 0}</h4>
                </div>
            </div>
            <div className="flex dashboard__button flex-jc-sb">
                <button onClick={toPageExpense}>Add Expense</button>
                <button onClick={toPageIncome}>Add Income</button>
            </div>
            <div className="dashboard__history flex flex-fd-c flex-ai-c">
                <h3><u>History</u></h3>
                <div className="table">
                    <table>
                        <tbody>
                            {
                                lists.length > 0 ? lists.sort((a,b) => (new Date(b.date)-new Date(a.date))).map((list,index) => (
                                    <tr key={index}>
                                        <td>{new Date(list.date).toLocaleDateString()}</td>
                                        <td>{list.desc}</td>
                                        <td style={{color: list.amount < 0 ? 'red' : 'green'}}>{list.amount.toLocaleString()}</td>
                                    </tr>
                                )) : <tr>
                                        <td></td>
                                        <td>No history.</td>
                                        <td></td>
                                    </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Balance