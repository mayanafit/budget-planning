import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const FormLogReg = ({page}) => {
    const history = useHistory()
    const [name, setName] = useState(``)
    const [password, setPassword] = useState(``)
    const [repeat, setRepeat] = useState(``)
    const [alert, setAlert] = useState(false)
    const [msg, setMsg] = useState(``)

    const submitPage = (e) => {
        e.preventDefault()
        setAlert(false)
        setMsg(``)
        const data = {
            name,
            password
        }
        if (page === 'Register') {
            if (password === repeat) {
                console.log(data)
            } else {
                setAlert(true)
                setMsg(`Wrong input at Repeat Password, please check again.`)
            }
        } else {
            localStorage.setItem(`name`, name)
            history.push(`/dashboard`)
        }
    }
    return (
        <div className="login__form">
            <h2>{page} Page</h2>
            {
                alert && <h4 style={{color: 'red'}}>{msg}</h4>
            }
            <form onSubmit={(e) => submitPage(e)}>
                <div>
                    <label>Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="John Doe" />
                </div>
                <div>
                    <label>Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)}type="password" placeholder="******" />
                </div>
                {
                    page === 'Register' && (
                        <div>
                            <label>Repeat Password</label>
                            <input value={repeat} onChange={(e) => setRepeat(e.target.value)}type="password" placeholder="******" />
                        </div>
                    )
                }
                <button type="submit">{page}</button><br/>
                {
                    page === 'Login' ? <small>Don't have account? Register <Link to="/register">here.</Link></small> : <small>Already a user? Login <Link to="/">here.</Link></small>
                }
            </form>
        </div>
    )
}

export default FormLogReg