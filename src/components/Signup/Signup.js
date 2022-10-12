import { Component } from 'react';
import './Signup.css';

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
        }
    }
    setData = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render() {
        return (
            <div className='signup-container'>
                <div className='signup-title'>Create Account</div>
                <div className='signup-form-line'>
                    <div className="signup-label">FirstName:</div>
                    <div className="signup-textbox">
                        <input type="text" name="firstName" onChange={ this.setData } />
                    </div>
                </div>
                <div className='signup-form-line'>
                    <div className="signup-label">LastName:</div>
                    <div className="signup-textbox">
                        <input type="text" name="lastName" onChange={ this.setData } />
                    </div>
                </div>
                <div className='signup-form-line'>
                    <div className="signup-label">Email:</div>
                    <div className="signup-textbox">
                        <input type="email" name="email" onChange={ this.setData } />
                    </div>
                </div>
                <div className='signup-form-line'>
                    <div className="signup-label">Password:</div>
                    <div className="signup-textbox">
                        <input type="password" name="password" onChange={ this.setData } />
                    </div>
                </div>
                <div>
                    <input type="button" onClick={this.signup} name='signup' id='signup-button' value='Signup' />
                </div>
            </div>
        )
    }
}