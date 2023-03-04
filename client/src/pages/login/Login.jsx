import "./login.css"
import {Link} from "react-router-dom"
import { useContext, useRef } from "react";
import axios from "../../axiosInstance";
import { Context } from "../../context/Context";
export default function Login() {
  
  const userRef = useRef();
  const passwordRef=useRef();
  const {user,dispatch,isFetching}=useContext(Context);


  const handleSubmit=async (e)=>{
    e.preventDefault();
    dispatch({type:"LOGIN_START"});
    try {
      const res=await axios.post("/auth/login",{
        username:userRef.current.value,
        password:passwordRef.current.value
      });
      dispatch({type:"LOGIN_SUCCESS",payload:res.data});
      
    } catch (error) {
      dispatch({type:"LOGIN_FAILURE"});
    }
  };
  console.log(user);
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <form action="" className="loginForm" onSubmit={handleSubmit}>
            <label htmlFor="">Username</label>
            <input type="text" placeholder="Enter your username..." ref={userRef}/>
            <label htmlFor="">Password</label>
            <input type="password" name="" id="" placeholder="Enter your Password..." ref={passwordRef}/>
            <button className="loginButton" type="submit" disabled={isFetching}>Login</button>

        </form>
        <p className="login-reg">Don't have an account? <Link className="link" to="/register">Register</Link></p>
    </div>
  )
}
