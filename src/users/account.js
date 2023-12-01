import * as client from "./client";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
function Account() {
  const { id } = useParams();
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();

  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setAccount(user);
  };

  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };
  useEffect(() => {
    if (id) {
      findUserById(id);
    }
    else {
      fetchAccount();
    }
  }, []);

  const save = async () => {
    await client.updateUser(account);
  }

  const signout = async () => {
    await client.signout();
    navigate("/Kanbas/Signin");
  };


  return (
    <div className="page-col page-left-margin">
      <h1>Account</h1>
      {account && (
        <div>
          <input placeholder="username"
          value={account.username} 
            onChange={(e) => setAccount({ ...account,
              username: e.target.value })}/>
          <input placeholder="password"
          value={account.password}
            onChange={(e) => setAccount({ ...account,
              password: e.target.value })}/>
          <input placeholder="first name"
          value={account.firstName}
            onChange={(e) => setAccount({ ...account,
              firstName: e.target.value })}/>
          <input placeholder="last name"
          value={account.lastName}
            onChange={(e) => setAccount({ ...account,
              lastName: e.target.value })}/>
          <input placeholder="dob"
          value={account.dob}
            onChange={(e) => setAccount({ ...account,
              dob: e.target.value })}/>
          <input placeholder="email"
          value={account.email}
            onChange={(e) => setAccount({ ...account,
              email: e.target.value })}/>
          <select value={account.role}
          onChange={(e) => setAccount({ ...account,
              role: e.target.value })}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <button className="btn btn-primary w-100" onClick={save}>
            Save
          </button>
          <button className="btn btn-danger w-100" onClick={signout}>
            Sign out
          </button>
          <Link to="/Kanbas/admin/users" className="btn btn-warning w-100">
            Users
          </Link>
        </div>
      )}
    </div>
  );
}
export default Account;

