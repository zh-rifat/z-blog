import "./register.css"
import {Link} from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "../../axiosInstance";

const authValidator =require( "../../utils/authValidator");


export default function Register() {

  const [username, setusername] = useState("");
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState("");
  const [rpassword, setrpassword] = useState("");

  const [passWarning, setpassWarning] = useState("");
  const [emailWarning,setemailWarning]=useState("");
  const [usernameWarning,setusernameWarning]=useState("");

  const [error, setError] = useState(false)

  useEffect(() => {
    setpassWarning(authValidator.passwordValidator(password,rpassword));
  }, [rpassword,password]);
  
  useEffect(()=>{
    setemailWarning(authValidator.emailValidator(email));
  },[email])


  const handleSubmit=async (e)=>{
    e.preventDefault();
    try{
      const res=await axios.post("/auth/register",{
        username,email,password
      });
      res.data&& window.location.replace('/login');
    }catch(err){
      setError(true);
      console.log(err);
    }
  }

  return (
    <div className="register">
        <span className="registerTitle">Register</span>
        <form action="" className="registerForm" onSubmit={handleSubmit}>
            <label htmlFor="">Email <span className="warning">{emailWarning}</span></label>
            <input type="text" placeholder="Enter your email..." onChange={e=>setEmail(e.target.value)}/>
            <label htmlFor="">Username</label>
            <input type="text" placeholder="Enter your username..." onChange={e=>setusername(e.target.value)} />
            <label htmlFor="">Password</label>
            <input type="password" name="" id="" placeholder="Enter your Password..." onChange={e=>setpassword(e.target.value)}/>
            <label htmlFor="">Re-Type Password <span className="warning">{passWarning}</span></label>
            
            <input type="password" name="" id="" placeholder="retype your Password..." onChange={e=>setrpassword(e.target.value)}/>
            <button className="registerButton" type="submit">Register</button>
            {error&&<span className="warning">something went wrong!</span>}

        </form>
        <p className="reg-login">Already have an account? <Link className="link" to="/login">Login</Link></p>
    </div>
  )
}
