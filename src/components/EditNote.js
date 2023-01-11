import React, {useContext, useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import noteContext from "../context/notes/noteContext";

const EditNote = (props) => {
    const context = useContext(noteContext);
    const { editNote } = context;
    let history = useHistory();
    const [note, setNote] = useState({
        id: "",
        etitle: "",
        edescription: "",
        etag: "default",
      });
      useEffect(() => {
        if (localStorage.getItem("token")) {
          updateNote();
        } else {
          history.push("/login");
        }
        // eslint-disable-next-line
      }, []);
    const updateNote = () => {
        const currentNote = JSON.parse(localStorage.getItem("note"))
        setNote({
          id: currentNote._id,
          etitle: currentNote.title,
          edescription: currentNote.description,
          etag: currentNote.tag,
        });
      };
      const handleClick = (e) => {
        editNote(note.id, note.etitle, note.edescription, note.etag);
        props.showAlert("Updated Successfully", "success");
        localStorage.removeItem("note");
        history.push("/");
      };
      const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
      };
  return (
    <div className="container my-3">
      <h2>Edit Your Note</h2>
      <form className="my-3">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="etitle"
            name="etitle"
            value={note.etitle}
            aria-describedby="emailHelp"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="edescription"
            name="edescription"
            value={note.edescription}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="etag"
            name="etag"
            value={note.etag}
            onChange={onChange}
          />
        </div>
        
        <button disabled={note.edescription.length<5 || note.etitle.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>
          Update Note
        </button>
      </form>
    </div>
  )
}

export default EditNote
