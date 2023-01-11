import React, { useContext, useRef } from "react";
import noteContext from "../context/notes/noteContext";

const ConfirmDelete = (props) => {
  const context = useContext(noteContext);
  const ref = useRef(null);
  const refClose = useRef(null);
  const {note, showAlert} = props;
  const { deleteNote } = context;
  console.log(note)
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={ref}
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
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  deleteNote(note);
                  refClose.current.click();
                  showAlert("Deleted Successfully", "success");
                }}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete;
