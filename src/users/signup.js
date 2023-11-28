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
    <>
        <div>
        <h1>Signup</h1>
        {error && <div>{error}</div>}
        <input
            value={credentials.username}
            onChange={(e) => setCredentials({
            ...credentials,
            username: e.target.value })} />
        <input
            value={credentials.password}
            onChange={(e) => setCredentials({
            ...credentials,
            password: e.target.value })} />
        <button onClick={signup}>
            Signup
        </button>
        </div>
        <div>
            <Link to="/Kanbas/Signin" className="btn btn-success">
                    Go to Sign In
            </Link>
        </div>
    </>
    
  );
}
export default Signup;