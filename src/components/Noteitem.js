import React from "react";
import { Link } from "react-router-dom";

function Noteitem(props) {
  const { note, deletingNote } = props;
  return (
    <>
      <div className="col-md-3">
        <div className="card my-3">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <h5 className="card-title">{note.title}</h5>
              <i
                className="fa-solid fa-trash-can mx-2"
                onClick={() => {
                  deletingNote(note);
                }}
              ></i>
              <Link to="/editnote"><i
                className="fa-solid fa-pen-to-square mx-2"
                onClick={()=>{
                  localStorage.setItem("note", JSON.stringify(note));
                }}
              ></i></Link>
            </div>
            <p className="card-text">{note.description}</p>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Noteitem;
