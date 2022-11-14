import { Component } from 'react';
import './Signup.css';
import axios from 'axios';

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
    signup = async () => {
        try {
            this.setState({ error: '' });
            const { email, password, firstName, lastName, } = this.state;
            if (email && password && firstName && lastName) {
                const res = await axios.post('http://localhost:2323/api/v1/user/signup', {
                    email,
                    password,
                    firstName,
                    lastName,
                })
                console.log(res);
                if (res.data.success) {
                    this.setState({
                        error: res.data.message
                    });
                } else {
                    this.setState({
                        error: res.data.message
                    });
                }
            } else {
                this.setState({
                    error: 'All fields are mandatory!'
                });
            }
        } catch (ex) {
            if (ex) {
                if (ex.response) {
                    if (ex.response.data) {
                        if (!ex.response.data.success) {
                            this.setState({
                                error: ex.response.data.message
                            });
                        }
                    }
                }
            }
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
                    <input type="button" onClick={ this.signup } name='signup' id='signup-button' value='Signup'
                        disabled={ !(this.state.firstName && this.state.lastName && this.state.email && this.state.password) } />
                </div>
                <div style={ { marginTop: '20px' } }>
                    { this.state.error }
                </div>
            </div>
        )
    }
}