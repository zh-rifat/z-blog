import { useContext, useEffect, useState } from "react";
import "./write.css";
import axios from "../../axiosInstance";
import { Context } from "../../context/Context";
export default function Write() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);

    const { user } = useContext(Context);

    const [checkBoxes, setCheckBoxes] = useState(null);
    const [cats,setCats]=useState([]);
    useEffect(()=>{
      const getCats=async ()=>{
        const res=await axios.get('/categories');
        setCats(res.data);
        console.log(res);
      }
      getCats();
    },[]);
    const handleSubmit =async (e) => {
        e.preventDefault();
        const categories=[];
        for(const key in checkBoxes){
            if(checkBoxes[key]){
                categories.push(key);
            }
        }
        const newPost = {
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
                newPost.photo = filename;
                try {
                    await axios.post("/upload", data);
                } catch (error) {
                    console.log(error);
                }
            }
            const res = await axios.post("/posts", newPost);
            window.location.replace(`/post/${res.data._id}`);
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        let chk={};
        cats.map((c)=>(
            eval(`chk.${c.name}=${false}`)
        ))
        setCheckBoxes(chk);
    }, [cats]);

    const handleCheckboxChange=(e)=>{
        console.log(e.target.checked)
        const {name,checked}=e.target;
        setCheckBoxes({...checkBoxes,[name]:checked});
       
    }

    return (
        <div className="write">
            {
                file &&
                <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
            }
            <form className="writeForm" onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                    <label htmlFor="inputFile">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" name="" id="inputFile" onChange={(e)=>setFile(e.target.files[0])}/>
                    <input type="text" name="" id="" placeholder="Title" className="writeInput" autoFocus={true} onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                    <h4>Select categories: </h4>
                <div className="writeFormGroup write-cats">
                    <ul>
                        {cats.map((c)=>(
                        <li>
                            <label>
                                <input type="checkbox" name={c.name} onChange={handleCheckboxChange} id="" />
                                {c.name}
                            </label>
                        </li>
                        ))
                        }
                    </ul>
                </div>


                <div className="writeFormGroup">
                    <textarea type="text" rows={10} name="" className="writeInput writeText" placeholder="Tell your story..." onChange={(e)=>setDesc(e.target.value)}></textarea>
                </div>
                <button className="writeSubmit" type="submit">Publish</button>
            </form>
        </div>
    );
}
