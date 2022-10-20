import { Component } from 'react';
import './Login.css';
import bootstrap from '../../bootstrapData';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
        }
    }
    login = () => {
        this.setState({error: ''})
        if(this.state.email && this.state.password) {
            const res = bootstrap.users.login(this.state.email, this.state.password)
            if(res.success) {
                this.setState({
                    error: 'Logged In'
                });
            } else {
                this.setState({
                    error: res.message
                });
            }
        } else {
            this.setState({
                error: "Email and Password are required!"
            });
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
                        <input type="email" name="email" value={this.state.email} onChange={ this.setData } />
                    </div>
                </div>
                <div className='login-form-line'>
                    <div className="login-label">Password:</div>
                    <div className="login-textbox">
                        <input type="password" name="password" value={this.state.password} onChange={ this.setData } />
                    </div>
                </div>
                <div>
                    <input type="button" onClick={this.login} name='login' id='login-button' value='Login'
                    disabled={!this.state.email || !this.state.password} />
                </div>
                <div style={{marginTop: '20px'}}>
                    {this.state.error}
                </div>
            </div>
        )
    }
}