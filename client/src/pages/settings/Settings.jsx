import SideBar from "../../components/sidebar/SideBar"
import "./settings.css"

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form action="" className="settingsForm">
                <label htmlFor="">Profile Picture</label>
                <div className="settingsProfilePic">
                    <img src={require("../../assets/img/avatar.jpg")} alt="" />
                    <label htmlFor="inputFile">
                        <i className="settingsPPIcon far fa-user-circle"></i>
                    </label>
                    <input type="file" name="" id="inputFile" />
                </div>
                    <label>Username</label>
                    <input type="text" placeholder="zh_rifat" />
                    <label>Email</label>
                    <input type="email" placeholder="zhrifat@protonmail.com" />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <SideBar/>
    </div>
  )
}
