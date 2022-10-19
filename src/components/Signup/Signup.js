import { Component } from 'react';
import './Signup.css';
import bootstrap from '../../bootstrapData';

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            error: '',
        }
    }
    setData = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    signup = () => {
        this.setState({ error: '' });
        const { email, password, firstName, lastName, } = this.state;
        if (email && password && firstName && lastName) {
            const res = bootstrap.users.signup(firstName, lastName, email, password);
            if (res.success) {
                this.setState({
                    error: res.message
                });
            } else {
                this.setState({
                    error: res.message
                });
            }
        } else {
            this.setState({
                error: 'All fields are mandatory!'
            });
        }
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
                    <input type="button" onClick={ this.signup } name='signup' id='signup-button' value='Signup' />
                </div>
                <div style={ { marginTop: '20px' } }>
                    { this.state.error }
                </div>
            </div>
        )
    }
}