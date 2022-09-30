import "./post.css";

export default function Post() {
  return (
    <div className="postWrapper">
        <img className="postImg" src={require('../../assets/img/avatar.jpg')} alt="" />

        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Science</span>
                <span className="postCat">Tech</span>
            </div>
            <span className="postTitle">Post Title</span>
            <hr />
            <span className="postTimestamp">1 hour ago</span>
        </div>
        <p className="postDesc">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, voluptatibus. Recusandae expedita natus voluptate in labore alias cumque, ullam maiores veniam modi cupiditate, doloremque ipsum eius possimus, maxime iste quod numquam nostrum. Quae ab id officia, temporibus totam et. Repellendus consequatur pariatur quos odit quas voluptate eum at, maxime ipsam animi illum necessitatibus nisi perspiciatis ducimus nihil nesciunt qui officia quo velit. Nisi placeat expedita explicabo totam repudiandae harum rem, fugiat eligendi blanditiis, eaque illum molestiae et labore vel officiis aut impedit quasi voluptatibus! Veniam quis architecto beatae facere ducimus error excepturi nemo in. Veritatis cumque iusto aliquid accusantium eaque?        </p>
    </div>
  )
}
