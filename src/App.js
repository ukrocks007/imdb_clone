import "./App.css";
import React from "react";
import Landing from "./components/Landing/Landing";
import Login from "./components/Admin/Login/Login";
import Signup from "./components/Admin/Signup/Signup";
import UserLogin from "./components/Login/Login";
import UserSignup from "./components/Signup/Signup";
import Base from "./layouts/base";
import { BrowserRouter, Routes, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      showLogin: false,
      showSignUp: false,
    };
  }

  showLoginForm = (e) => {
    this.setState({
      showLogin: true,
      showSignUp: false,
    });
  };

  showSignupForm = () => {
    this.setState({
      showSignUp: true,
      showLogin: false,
    });
  };

  showLanding = () => {
    this.setState({
      showSignUp: false,
      showLogin: false,
    });
  };

  static getDerivedStateFromProps(props, state) {
    return {
      ...state,
      isLoggedIn: !!props.isLoggedIn,
    };
  }

  // use getDerivedStateFromProps to check if props.isLoggedIn is true
  // If true state.isLoggedIn should also be true

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Base />}>
              <Route index element={<Landing />} />
              <Route path="/login" element={<UserLogin />} />
              <Route path="/signup" element={<UserSignup />} />
              <Route path="/admin" element={<Login />} />
              <Route path="/admin/login" element={<Login />} />
              <Route path="/admin/signup" element={<Signup />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
