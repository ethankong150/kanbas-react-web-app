import { Link, useLocation } from "react-router-dom";
function Nav() {
  const { pathname } = useLocation();
  return (
    <nav className="nav nav-tabs mt-2">
        <Link to="/project/home"
            className={`nav-link ${pathname.includes("Project") ? "active" : ""}`}>Home</Link>
        <Link to="/project/Account"
            className={`nav-link ${pathname.includes("Project") ? "active" : ""}`}>Account</Link>
        <Link to="/project/Signin"
            className={`nav-link ${pathname.includes("Project") ? "active" : ""}`}>Sign In</Link>
        <Link to="/project/Signup"
            className={`nav-link ${pathname.includes("Project") ? "active" : ""}`}>Sign Up</Link>
    </nav>
  );
}
export default Nav;