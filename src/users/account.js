import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Account() {
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();

  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };
  const save = async () => {
    await client.updateUser(account);
  };
  const signout = async () => {
    await client.signout();
    navigate("/project/signin");
  };

  useEffect(() => {
    fetchAccount();
  }, []);
  return (
    <div className="w-50">
      <h1>Account</h1>
      {account && (
        <div>
          <div>
          <label>Password: </label>
          <input value={account.password}
            onChange={(e) => setAccount({ ...account,
              password: e.target.value })}/>
          </div>
          <div>
          <label>First Name: </label>
          <input value={account.firstName}
            onChange={(e) => setAccount({ ...account,
              firstName: e.target.value })}/>
          </div>
          <div>
            <label>Last Name: </label>
            <input value={account.lastName}
              onChange={(e) => setAccount({ ...account,
                lastName: e.target.value })}/>
          </div>
          <div>
            <label>Date of Birth: </label>
            <input value={account.dob}
              onChange={(e) => setAccount({ ...account,
                dob: e.target.value })}/>
          </div>
          <div>
            <label>Email: </label>
            <input value={account.email}
              onChange={(e) => setAccount({ ...account,
                email: e.target.value })}/>
          </div>
          <div>
          <label>Role: </label>
          <select onChange={(e) => setAccount({ ...account,
              role: e.target.value })}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          </div>
        </div>
      )}
      
        <button onClick={save}>
          Save
        </button>
        <button onClick={signout}>
          Signout
        </button>
        <Link to="/project/admin/users" className="btn btn-warning w-100">
            Users
        </Link>
    </div>
  );
}
export default Account;