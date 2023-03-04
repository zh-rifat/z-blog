import "./post.css";
import {Link} from 'react-router-dom'

export default function Post({post}) {
  const PF="http://localhost:5000/images/";
  return (
    <div className="postWrapper">

        {
          post.photo&&
            <img className="postImg" src={PF+post.photo} alt="" />
          }
        

        <div className="postInfo">
            <Link to={`/post/${post._id}`} className="link">
              <span className="postTitle">{post.title}</span>
            </Link>
            <div className="postCats">
              {
                post.categories.map(c=>(
                  
                <span className="postCat">{c}</span>
                ))
              }       
            </div>
            <hr />
            <span className="postTimestamp">{new Date(post.updatedAt).toDateString()}</span>
        </div>
        <p className="postDesc">{post.desc}</p>
    </div>
  )
}
