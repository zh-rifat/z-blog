import { useContext, useEffect, useState } from "react"
import SideBar from "../../components/sidebar/SideBar"
import { Context } from "../../context/Context"
import "./settings.css"
import PF from "../../utils/PF";
import axios from "../../axiosInstance";
import { useDeferredValue } from "react";
export default function Settings() {
    const {user,dispatch}=useContext(Context);
    const [email, setEmail] = useState(user.email);
    const [newPassword, setNewPassword] = useState("");
    const [rnewPassword, setRnewPassword] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [file, setFile] = useState(null);
    const [photoDir, setPhotoDir] = useState(user.profilePic);
    useEffect(() => {
        const fileAction=()=>{
            
            file&&setPhotoDir(URL.createObjectURL(file));
            console.log(file);
        };
        fileAction();
    
    }, [file])
    const handleSubmit =async (e) => {
        e.preventDefault();
        const updatedUser = {
            userId:user._id,
            email,
        }
        if(newPassword!==""&&newPassword==rnewPassword){
            updatedUser.password=newPassword;
        }
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updatedUser.profilePic = PF()+filename;
            try {
                await axios.post("/upload", data);
            } catch (error) {
                console.log(error);
            }
        }
        try {
            const res = await axios.put("/users/"+user._id, {oldPassword,updatedUser});
            if(res){
                console.log(res);
                dispatch({type:"UPDATE_USER",payload:res.data});
                window.location.replace("/settings");
            }
        } catch (error) {
            console.log(error);

        }
    }
    const handleDelete=async ()=>{
        try {
            const res=await axios.delete("/users/"+user._id,{data:{userId:user._id}});
            dispatch({type:"LOGOUT"});
        } catch (error) {
            console.log(error);
        }

    }
    return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle" onClick={handleDelete}>Delete Account</span>
            </div>
            <form action="" className="settingsForm" onSubmit={handleSubmit}>
                <label htmlFor="">Profile Picture</label>
                <div className="settingsProfilePic">
                    <img src={photoDir} alt="" />
                    <label htmlFor="inputFile">
                        <i className="settingsPPIcon far fa-edit"></i>
                    </label>
                    <input type="file" name="" id="inputFile" onChange={(e)=>setFile(e.target.files[0])}/>
                </div>
                    <p className="p-username">username: <span>{user.username}</span></p>
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <label>New Password</label>
                    <input type="password" onChange={(e)=>setNewPassword(e.target.value)}/>
                    <label>Repeat Password</label>
                    <input type="password" onChange={(e)=>setRnewPassword(e.target.value)}/>
                    <label>Enter password for confirmation</label>
                    <input type="password" onChange={(e)=>setOldPassword(e.target.value)}/>
                    <button className="settingsSubmit">Update</button>
            </form>
        </div>
    </div>
    )
}
