import './home.css';
import Header from '../../components/header/Header';
import SideBar from '../../components/sidebar/SideBar';
import Posts from '../../components/posts/Posts';
import { useState,useEffect } from 'react';
import axios from "../../axiosInstance";
import { useLocation } from 'react-router-dom';
// axios.defaults.baseURL="http://localhost:5000/api/";

export default function Home() {
  const [posts,setPosts]=useState([]);
  const {search}=useLocation();
  console.log(search)
  useEffect(()=>{
    const fetchPosts= async ()=>{
      const res=await axios.get(`/posts${search}`);
      setPosts(res.data);
    }
    fetchPosts();
  },[search]);
  return (
    <>
        <Header/>
        <div className="home">
          
          <Posts posts={posts}/>
          <SideBar className="sidebar"/>
        </div>
    </>
  )
}

