import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/project/account");
  };
  return (
    <div>
      <h1>Signin</h1>
      <div>
        <label>Username: </label>
        <input value={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
      </div>
      <div>
        <label>Password: </label>
        <input value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
      </div>
      <button onClick={signin}> Signin </button>
    </div>
  );
}
export default Signin;