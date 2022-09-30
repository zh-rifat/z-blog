
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


function App() {
  const user=false;
  return (
    <Router>
      <TopBar/>
      
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/login" element={user?<Home/>:<Login/>}/>
        <Route path="/register" element={user?<Home/>:<Register/>}/>
        <Route path="/write" element={user?<Write/>:<Login/>}/>
        <Route path="/settings" element={user?<Settings/>:<Login/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
