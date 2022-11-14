import { useState } from 'react';
import './Login.css';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const login = async () => {
        try {
            setError('');
            if (email && password) {
                const res = await axios.post('http://localhost:2323/api/v1/user/login', {
                    "email": email,
                    "password": password
                })
                console.log(res);
                if (res.data.success) {
                    setError(res.data.message);
                    localStorage.setItem('token', res.data.token)
                }
            } else {
                setError("Email and Password are required!");
            }
        } catch (ex) {
            if (ex) {
                if (ex.response) {
                    if (ex.response.data) {
                        if (!ex.response.data.success) {
                            setError(ex.response.data.message);
                        }
                    }
                }
            }
        }
    }
    return (
        <div className='login-container'>
            <div className='login-title'>Login</div>
            <div className='login-form-line'>
                <div className="login-label">Email:</div>
                <div className="login-textbox">
                    <input type="email" name="email" value={ email } onChange={ e => { setEmail(e.target.value) } } />
                </div>
            </div>
            <div className='login-form-line'>
                <div className="login-label">Password:</div>
                <div className="login-textbox">
                    <input type="password" name="password" value={ password } onChange={ e => { setPassword(e.target.value) } } />
                </div>
            </div>
            <div>
                <input type="button" onClick={ login } name='login' id='login-button' value='Login'
                    disabled={ !email || !password } />
            </div>
            <div style={ { marginTop: '20px' } }>
                { error }
            </div>
        </div>
    )
}

export default Login;