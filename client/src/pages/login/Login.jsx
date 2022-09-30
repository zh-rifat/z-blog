import "./login.css"
import {Link} from "react-router-dom"
export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <form action="" className="loginForm">
            <label htmlFor="">Email</label>
            <input type="text" placeholder="Enter your email..." />
            <label htmlFor="">Password</label>
            <input type="password" name="" id="" placeholder="Enter your Password..."/>
            <button className="loginButton">Login</button>

        </form>
        <button className="loginRegBtn">
                <Link className="link" to="/register">Register</Link></button>
    </div>
  )
}
