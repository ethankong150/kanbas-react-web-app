import Signin from "../users/signin";
import Account from "../users/account";
import UserTable from "../users/table";
import Signup from "../users/signup.js";
import Home from "../users/home.js";
import { Routes, Route } from "react-router-dom";
import Nav from "./nav.js";

function Project() {
  return (
    <div className="row">
      <div className="col-2">
        <Nav />
      </div>
      <div className="col-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/account" element={<Account />} />
          <Route path="/admin/users" element={<UserTable />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
}
export default Project;