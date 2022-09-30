import './sidebar.css'

export default function SideBar() {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">About me</span>
            <img className='sidebarImage' src={require('../../assets/img/avatar.jpg')} alt="" />
            <p>about me.about me.about me.about me.about me.about me.about me.about me.about me.about me.about me.about me.about me.</p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">Categories</span>
            <ul className="sidebarList">
              <li className="sidebarListItem">Science</li>
              <li className="sidebarListItem">Tech</li>
              <li className="sidebarListItem">Music</li>
              <li className="sidebarListItem">Movie</li>
              <li className="sidebarListItem">Sport</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">Follow us</span>
            <div className="sidebarSocial">
              <i className="sidebarIcon fab fa-facebook-square"></i>
              <i className="sidebarIcon fab fa-twitter-square"></i>
              <i className="sidebarIcon fab fa-linkedin"></i>
              <i className="sidebarIcon fab fa-instagram-square"></i>
            </div>
        </div>
    </div>
  )
}
