import { Component } from 'react';
import './Login.css';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    setData = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render() {
        return (
            <div className='login-container'>
                <div className='login-title'>Login</div>
                <div className='login-form-line'>
                    <div className="login-label">Email:</div>
                    <div className="login-textbox">
                        <input type="email" name="email" onChange={ this.setData } />
                    </div>
                </div>
                <div className='login-form-line'>
                    <div className="login-label">Password:</div>
                    <div className="login-textbox">
                        <input type="password" name="password" onChange={ this.setData } />
                    </div>
                </div>
                <div>
                    <input type="button" onClick={this.login} name='login' id='login-button' value='Login' />
                </div>
            </div>
        )
    }
}