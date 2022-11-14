import { useState } from "react";
import "./Signup.css";
import axios from "axios";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const signup = async () => {
    try {
      setError("");
      if (email && password && firstName && lastName) {
        const res = await axios.post("http://localhost:2323/api/v1/admin/signup", {
          email,
          password,
          firstName,
          lastName,
        });
        console.log(res);
        if (res.data.success) {
          setError(res.data.message);
        } else {
          setError(res.data.message);
        }
      } else {
        setError("All fields are mandatory!");
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
  };
  return (
    <div className="signup-container">
      <div className="signup-title">Add New Admin</div>
      <div className="signup-form-line">
        <div className="signup-label">FirstName:</div>
        <div className="signup-textbox">
          <input
            type="text"
            name="firstName"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="signup-form-line">
        <div className="signup-label">LastName:</div>
        <div className="signup-textbox">
          <input
            type="text"
            name="lastName"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="signup-form-line">
        <div className="signup-label">Email:</div>
        <div className="signup-textbox">
          <input
            type="email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="signup-form-line">
        <div className="signup-label">Password:</div>
        <div className="signup-textbox">
          <input
            type="password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
      </div>
      <div>
        <input type="button" onClick={signup} name="signup" id="signup-button" value="Signup" />
      </div>
      <div style={{ marginTop: "20px" }}>{error}</div>
    </div>
  );
}
