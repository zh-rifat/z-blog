import "./topBar.css"
import avatar from '../../assets/img/avatar.jpg';
import '../../assets/css/all.min.css';
import {Link} from "react-router-dom";
export default function TopBar() {
  const user=false;
  return (
    <div className="topbar">
      <div className="nav">
        <nav>
          <ul className="topList">
            <li className="topListItem"><Link className="link" to="/">Home</Link></li>
            <li className="topListItem"><Link className="link" to="/write">Write</Link></li>
            <li className="topListItem"><Link className="link" to="/contact">Contact</Link></li>
            <li className="topListItem"><Link className="link" to="/about">About</Link></li>
            {user&&<li className="topListItem"><Link className="link" to="/about">Logout</Link></li>}
            
          </ul>
        </nav>
      </div>
      <div className="right">
        <i className="fa-solid fa-magnifying-glass"></i>
        {user?<img src={avatar} alt="" />:
          (
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">Login</Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/register">Register</Link>
              </li>
            </ul>

          )

        
        }
        
      </div>

    </div>
  )
}

