import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';

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
            showLogin: true
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
                <Header isLoggedIn={ this.state.isLoggedIn } onLoginClick={this.showLoginForm} />
                {
                    !this.state.showLogin ?
                        (<Landing isLoggedIn={ this.state.isLoggedIn } />)
                        : (<Login />)
                }
            </div>
        )
    };
}

export default App;
