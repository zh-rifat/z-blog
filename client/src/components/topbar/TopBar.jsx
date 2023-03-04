import "./topBar.css"
import avatar from '../../assets/img/avatar.jpg';
import '../../assets/css/all.min.css';
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Context } from "../../context/Context";
import { useState } from "react";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" })
  }
  
  const [clicked, setClicked] = useState(false)
  useEffect(() => {
    if(!clicked){
      const elements=document.getElementsByClassName("topList");
      for(let i=0;i<elements.length;i++){
        elements[i].style.right="-250px";
      }
    }else{
      const elements=document.getElementsByClassName("topList");
      for(let i=0;i<elements.length;i++){
        elements[i].style.right="0";
      }
    }
  
  }, [clicked]);
  
  useEffect(() => {
    document.addEventListener("mouseup",handleBlur);
    return () => {
      document.removeEventListener("mouseup",handleBlur);
    }
  }, [])
  
  const handleBlur=(e)=>{
    const btn=document.getElementById("mobile").contains(e.target);
    const list=document.getElementsByClassName("topList");
    const listItem=document.getElementsByClassName("topListItem");
    for(let k in listItem){
      console.log(typeof(list[k]));
      console.log(list[k]);
      if(typeof(list[k])=="object"&&!list[k].contains(e.target)){
        setClicked(false);
      }
    }
    let listClicked=false;
    for(let k in list){
      console.log(typeof(list[k]));
      if(typeof(list[k])=="object"&&list[k].contains(e.target)){
        listClicked=true;
        break;
      }
    }
    console.log(btn)
    console.log(typeof(list));
    if(!btn&&!listClicked){
      setClicked(false);
    }
  }

  return (
    <div className="topbar">
      <div className="container">
        <div className="nav">
          <nav>
            <ul className="topList">
              <Link className="link" to="/"><li className="topListItem">Home</li></Link>
              {user && <Link className="link" to="/write"><li className="topListItem">Write</li></Link>}
              <Link className="link" to="/contact"><li className="topListItem">Contact</li></Link>
              <Link className="link" to="/about"><li className="topListItem">About</li></Link>
              {user && <Link className="link" to="/login" onClick={handleLogout}><li className="topListItem">Logout</li></Link>}

            </ul>
          </nav>
        </div>
        <div className="right">
          <i className="fa-solid fa-magnifying-glass"></i>
          {user ?
            <Link to={"/settings"}><img src={user.profilePic} alt="" /></Link> :
            (
              <ul className="topList">
                <Link className="link" to="/login">
                  <li className="topListItem">Login</li>
                </Link>
                <Link className="link" to="/register">
                  <li className="topListItem">Register</li>
                </Link>
              </ul>

            )


          }

        </div>
        <div id="mobile">
          <i id="bar" className={clicked?'fas fa-times':'fas fa-bars'} onClick={()=>{setClicked(!clicked)}}></i>
        </div>
      </div>
    </div>
  )
}

