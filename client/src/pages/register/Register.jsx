import "./register.css"
import {Link} from "react-router-dom"
export default function Register() {
  return (
    <div className="register">
        <span className="registerTitle">Register</span>
        <form action="" className="registerForm">
            <label htmlFor="">Email</label>
            <input type="text" placeholder="Enter your email..." />
            <label htmlFor="">Username</label>
            <input type="text" placeholder="Enter your username..." />
            <label htmlFor="">Password</label>
            <input type="password" name="" id="" placeholder="Enter your Password..."/>
            <button className="registerButton">Register</button>

        </form>
        <button className="registerLoginBtn">
                <Link className="link" to="/login">Login</Link></button>
    </div>
  )
}
