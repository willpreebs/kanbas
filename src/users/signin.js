import * as client from "./client";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/Kanbas/Account");
  };
  return (
    <div className="page-col page-left-margin">
      <div>
        <h1>Signin</h1>

        <div className="row mt-3">
          <div className="col">
            <label htmlFor="username">Username</label>
          </div>
          <div className="col">
          <input className="form-control" id="username"
          value={credentials.username} 
          onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <label htmlFor="password">Password</label>
          </div>
          <div className="col">
            <input id="password" className="form-control"
            value={credentials.password} 
            onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>  
          </div>
        </div>
        <div className="row mt-3">
          <button className="btn btn-primary" onClick={signin}>
              Signin
          </button>
        </div>
      </div>
      <div className="mt-3">
            <Link to="/Kanbas/Signup" className="btn btn-success">
                    Sign Up
            </Link>
        </div>
    </div>
  );
}
export default Signin;