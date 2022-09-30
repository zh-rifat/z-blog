import "./write.css";

export default function Write() {
  return (
    <div className="write">
        <img className="writeImg" src={require("../../assets/img/header.jpg")} alt="" />
        <div className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="inputFile">
                    <i className="writeIcon fas fa-plus"></i>
                </label>
                <input type="file" name="" id="inputFile" />
                <input type="text" name="" id="" placeholder="Title" className="writeInput" autoFocus="true"/>
            </div>

            <div className="writeFormGroup">
                <textarea type="text" name="" className="writeInput writeText" placeholder="Tell your story..."></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </div>
    </div>
  )
}
