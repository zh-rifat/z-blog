

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Post from './pages/post/Post';
import Home from './pages/home/Home';
import SinglePost from './components/singlePost/SinglePost';
import TopBar from './components/topbar/TopBar';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { useContext } from 'react';
import { Context } from './context/Context';
import Edit from './pages/edit/Edit';
// import About from './pages/about/About';
import Contact from './pages/contact/Contact';


function App() {
  const {user}=useContext(Context);
  return (
    <Router>
      <TopBar/>
      
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/post/:_id" element={<Post/>}/>
        <Route path="/login" element={user?<Home/>:<Login/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/register" element={user?<Home/>:<Register/>}/>
        <Route path="/write" element={user?<Write/>:<Login/>}/>
        <Route path="/edit/:_id" element={user?<Edit/>:<Login/>}/>
        <Route path="/settings" element={user?<Settings/>:<Login/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
