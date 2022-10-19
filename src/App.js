import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            showLogin: false,
            showSignUp: false
        }
    }

    showLoginForm = (e) => {
        this.setState({
            showLogin: true,
            showSignUp: false,
        });
    }

    showSignupForm = () => {
        this.setState({
            showSignUp: true,
            showLogin: false,
        });
    }

    static getDerivedStateFromProps(props, state) {
        return {
            ...state,
            isLoggedIn: !!props.isLoggedIn
        };
    }

    // use getDerivedStateFromProps to check if props.isLoggedIn is true
    // If true state.isLoggedIn should also be true

    render() {
        return (
            <div className='App'>
                <Header isLoggedIn={ this.state.isLoggedIn } onLoginClick={ this.showLoginForm }
                    onSignupClick={ this.showSignupForm } />
                {
                    this.state.showLogin ?
                        (<Login />)
                        : this.state.showSignUp ?
                            (<Signup />) :
                            (<Landing isLoggedIn={ this.state.isLoggedIn } />)
                }
            </div>
        )
    };
}

export default App;
