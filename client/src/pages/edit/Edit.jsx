import axios from "../../axiosInstance";
import { useEffect, useRef, useState } from "react"
import { useLocation } from "react-router-dom";
import "./edit.css";
import { useContext } from "react";
import { Context } from "../../context/Context";
import PF from "../../utils/PF";
export default function Edit() {
    const postId = useLocation().pathname.split("/")[2];
    const { user } = useContext(Context);
    const [post, setPost] = useState(null);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    const [photoDir, setPhotoDir] = useState();
    useEffect(() => {
        const fileAction = () => {
            file && setPhotoDir(URL.createObjectURL(file));
        };
        fileAction();

    }, [file])





    const [checkBoxes, setCheckBoxes] = useState({});
    const [cats, setCats] = useState([]);
    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get('/categories');
            setCats(res.data);
        }
        getCats();
    }, []);

    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get(`/posts/${postId}`);
            setPost(res.data);
            const update = () => {
                let chk = {};
                cats.map((c) => {
                    chk[c.name] = false;
                    for (let i in res.data.categories) {
                        if (res.data.categories[i] == c.name) {
                            chk[c.name] = true;
                            break;
                        }
                    }
                })
                setCheckBoxes(chk);
            }
            update();


            setTitle(res.data.title);
            setDesc(res.data.desc);
            setPhotoDir(PF() + res.data.photo);
        }
        fetchPost();
    }, [cats]);
    const handleSubmit = async (e) => {
        e.preventDefault();

        const categories = [];
        for (const key in checkBoxes) {
            if (checkBoxes[key]) {
                categories.push(key);
            }
        }
        const updatedPost = {
            username: user.username,
            title,
            categories,
            desc
        }
        try {
            if (file) {
                const data = new FormData();
                const filename = Date.now() + file.name;
                data.append("name", filename);
                data.append("file", file);
                updatedPost.photo = filename;
                try {
                    await axios.post("/upload", data);
                    await axios.post(`/posts/deletePhoto`, { filename: post.photo });
                } catch (error) {
                    console.log(error);
                }
            }
            const res = await axios.put(`posts/${post._id}`, updatedPost);
            window.location.replace(`/post/${res.data._id}`);
        } catch (error) {
            console.log(error);

        }
    }

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setCheckBoxes({ ...checkBoxes, [name]: checked });
    }
    return (
        <div className="edit">
            {
                <img className="editImg" src={photoDir} alt="" />
            }
            <form className="editForm" onSubmit={handleSubmit}>
                <div className="editFormGroup">
                    <label htmlFor="inputFile">
                        <i className="editIcon fas fa-plus"></i>
                    </label>
                    <input type="file" name="" id="inputFile" onChange={(e) => setFile(e.target.files[0])} />
                    <input type="text" name="" id="" placeholder="Title" value={title} className="editInput" autoFocus={true} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="editFormGroup edit-cats">
                    <ul>
                        {cats.map((c) => (
                            <li>
                                <label>
                                    <input type="checkbox" name={c.name} checked={checkBoxes[c.name]} onChange={handleCheckboxChange} id="" />
                                    {c.name}
                                </label>
                            </li>
                        ))
                        }
                    </ul>
                </div>

                <div className="editFormGroup">
                    <textarea type="text" rows={10} name="" value={desc} className="editInput editText" placeholder="Tell your story..." onChange={(e) => setDesc(e.target.value)}></textarea>
                </div>
                <button className="editSubmit" type="submit">Publish</button>
            </form>
        </div>
    )

}
