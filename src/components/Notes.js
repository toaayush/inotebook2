import React, { useContext, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import noteContext from "../context/notes/noteContext";
import AddNote from "./AddNote";
import Noteitem from "./Noteitem";

const Notes = (props) => {
  const context = useContext(noteContext);
  let history = useHistory();
  const ref = useRef(null);
  const refClose = useRef(null);
  const { notes, getNotes, deleteNote } = context;
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "default",
  });
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      history.push("/login");
    }
    // eslint-disable-next-line
  }, []);
  const deletingNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };
  const handleClick = (e) => {
    console.log("Deleting the note...", note);
    deleteNote(note.id);
    refClose.current.click();
    props.showAlert("Deleted Successfully", "success");
  };
  return (
    <>
      <AddNote showAlert={props.showAlert} />
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fs-5" id="exampleModalLabel">
                Are you sure you want to delete?
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-footer">
              <button
                ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={handleClick}
                type="button"
                className="btn btn-primary"
              >
                Delete Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h2>Your Notes</h2>
        <div className="container mx-2">
          {notes.length === 0 && "No notes to display"}
        </div>
        {notes.map((note) => {
          return (
            <Noteitem
              key={note._id}
              deletingNote={deletingNote}
              note={note}
              showAlert={props.showAlert}
            />
          );
        })}
      </div>
    </>
  );
};

export default Notes;
