import './header.css';

const headerImg=require("../../assets/img/header.jpg");
export default function Header(){
    return(
        <div className="header">
            <div className="headerTitle">
                <h1>Z</h1>
                <h3>Blog</h3>
            </div>
            <img className='headerbg' src={headerImg} alt="" />
        </div>
    );

}
