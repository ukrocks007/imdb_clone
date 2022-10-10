import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
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
                <Header isLoggedIn={this.state.isLoggedIn} />
                <Landing isLoggedIn={this.state.isLoggedIn} />
            </div>
        )
    };
}

export default App;
