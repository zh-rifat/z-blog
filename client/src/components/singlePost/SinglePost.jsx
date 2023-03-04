import { useLocation } from "react-router-dom"
import "./singlepost.css"
import axios from "../../axiosInstance";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";
import PF from "../../utils/PF";
export default function SinglePost() {
  const loc=useLocation();
  const postId=loc.pathname.split("/")[2];
  const [post,setPost]=useState({});
  const {user}=useContext(Context);
  console.log(post.categories);
  console.log(postId);
  useEffect(() => {
    const getPost= async()=>{
      const res=await axios.get(`posts/${postId}`);
      setPost(res.data)
    }
    getPost();
  }, [postId]);
  
  const handleDelete=async ()=>{
    //TODO: show a confirmation prompt when delete button triggered;
    try {
      await axios.delete(`/posts/${postId}`,{data:{username:user.username}});
      window.location.replace("/");
    } catch (error) {
      console.log(error);
    }
  }

  const handleEdit=async ()=>{
    window.location.replace(`/edit/${post._id}`);
  }
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
          {
            post.photo&&<img src={PF()+post.photo} alt="" />
          }
          
          <h1 className="singlePostTitle">{post.title}</h1>
          <span className="singlePostCategories">
            {
              post.categories&&(post.categories.map((item,index)=>(<span>{item}</span>)))
            }
          </span>
          {user&&user.username==post.username&&
          <div className="singlePostBtns">
            <i className="singlePostIcon far fa-edit" onClick={handleEdit}></i>
            <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
          </div>
          }
          <div className="singlePostInfo">
            <span className="singlePostAuthor">Author: <Link className="link" to={`/?user=${post.username}`}><b>{post.username}</b></Link></span>
            <span className="singleTimestamp">{new Date(post.updatedAt).toDateString()}</span>
          </div>
          <p className="singlePostText">{post.desc}</p>
        </div>
        
    </div>
  )
}
