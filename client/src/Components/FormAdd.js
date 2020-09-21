import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { addExpense, addIncome } from '../store/action';

const FormAdd = ({page}) => {
    const location = useLocation()
    const history = useHistory()
    const dispatch = useDispatch()
    const [desc, setDesc] = useState(``)
    const [amount, setAmount] = useState(0)
    const { add } = useSelector(state => state)
    useEffect(() => {
        if (add) history.push(`/dashboard`)
    },[add, history])

    const submitInput = (e) => {
        e.preventDefault()
        
        if (location.pathname === '/dashboard/expenses') {
            const data = {
                desc,
                amount: -Number(amount)
            }
            dispatch(addExpense(data))
        } else {
            const data = {
                desc,
                amount: Number(amount)
            }
            dispatch(addIncome(data))
        }
    }
    return (
        <section className="form">
            <h2>{page}</h2>
            <form onSubmit={(e) => submitInput(e)}>
                <div>
                    <label>Description</label><br />
                    <input value={desc} onChange={(e) => setDesc(e.target.value)}type="text" placeholder={page === 'Expense' ? "e.g. monthly spotify bills" : "e.g. project x's income"}/>
                </div>
                <div>
                    <label>Amount</label><br />
                    <input onChange={(e) => setAmount(e.target.value)} type="number" min="0" placeholder="1000000"/>
                </div>
                <button type="submit">Add</button>
            </form>
        </section>
    )
}

export default FormAdd