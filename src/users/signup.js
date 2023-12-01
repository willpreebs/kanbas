import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";

function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "", password: "" });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate("/Kanbas/Account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div className="page-col page-left-margin">
        <div>
        <h1>Signup</h1>
        {error && <div>{error}</div>}
        <div className="row mt-3">
          <div className="col">
            <label for="username">Username</label>
          </div>
          <div className="col">
            <input id="username" className="form-control"
              value={credentials.username}
              onChange={(e) => setCredentials({
              ...credentials,
              username: e.target.value })} />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <label for="password">Password</label>
          </div>
          <div className="col">
            <input id="password" className="form-control"
              value={credentials.password}
              onChange={(e) => setCredentials({
              ...credentials,
              password: e.target.value })} />
          </div>
        </div>
        <div className="row mt-3">
          <button className="btn btn-primary" onClick={signup}>
              Signup
          </button>
        </div>
        
        </div>
        <div className="mt-3">
            <Link to="/Kanbas/Signin" className="btn btn-success">
                    Go to Sign In
            </Link>
        </div>
    </div>
  );
}
export default Signup;