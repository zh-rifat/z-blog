import axios from '../../axiosInstance';
import { useEffect, useState } from 'react'
import { Link} from 'react-router-dom';
import './sidebar.css'

export default function SideBar() {
  const [cats,setCats]=useState([]);
  useEffect(()=>{
    const getCats=async ()=>{
      const res=await axios.get('/categories');
      setCats(res.data);
      console.log(res);
    }
    getCats();
  },[]);
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">Categories</span>
            <ul className="sidebarList">
              {cats&&cats.map((c)=>(
                <Link to={`/?cat=${c.name}`} className="link">
                  <li className="sidebarListItem">{c.name}</li>
                </Link>
              ))}
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">Follow us</span>
            <div className="sidebarSocial">
              <a href="https://fb.com/0x0zhrifat" className='link' target="_blank" rel="noopener noreferrer"><i className="sidebarIcon fab fa-facebook-square"></i></a>
              <a href="https://twitter.com/zh_rifat" className='link' target="_blank" rel="noopener noreferrer"><i className="sidebarIcon fab fa-twitter-square"></i></a>
              <a href="https://www.linkedin.com/in/zh-rifat/" className='link' target="_blank" rel="noopener noreferrer"><i className="sidebarIcon fab fa-linkedin"></i></a>
              <a href="https://instagram.com/zh_rifat" className='link' target="_blank" rel="noopener noreferrer"><i className="sidebarIcon fab fa-instagram-square"></i></a>
              
            </div>
        </div>
    </div>
  )
}
