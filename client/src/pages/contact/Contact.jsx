import { Link } from "react-router-dom";
import "./contact.css";
export default function Contact(){
    return (
        <div className="contact">
            <a href="mailto:contact.zhrifat@gmail.com" className="link"> <i className="fa fa-message"></i> Contact our support</a>
        </div>
    )
}
