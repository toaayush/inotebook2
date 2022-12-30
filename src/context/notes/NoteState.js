import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "63abdfebce0cd92c91593a15",
      user: "63ab1221c5df8b6aa35b1b7c",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2022-12-28T06:19:23.358Z",
      __v: 0,
    },
    {
      _id: "63ada2f84ac290ea12fc77ba",
      user: "63ab1221c5df8b6aa35b1b7c",
      title: "New Note",
      description: "Please access the playlist",
      tag: "YouTube",
      date: "2022-12-29T14:23:52.571Z",
      __v: 0,
    },
    {
      _id: "63ada3054ac290ea12fc77bc",
      user: "63ab1221c5df8b6aa35b1b7c",
      title: "New Note2",
      description: "Please access the playlist",
      tag: "YouTube",
      date: "2022-12-29T14:24:05.180Z",
      __v: 0,
    },
    {
      _id: "63abdfebc1e0cd92c91593a1",
      user: "63ab1221c5df8b6aa35b1b7c",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2022-12-28T06:19:23.358Z",
      __v: 0,
    },
    {
      _id: "63ada21f84ac290ea12fc77b",
      user: "63ab1221c5df8b6aa35b1b7c",
      title: "New Note",
      description: "Please access the playlist",
      tag: "YouTube",
      date: "2022-12-29T14:23:52.571Z",
      __v: 0,
    },
    {
      _id: "63ada30154ac290ea12fc77b",
      user: "63ab1221c5df8b6aa35b1b7c",
      title: "New Note2",
      description: "Please access the playlist",
      tag: "YouTube",
      date: "2022-12-29T14:24:05.180Z",
      __v: 0,
    },
    {
      _id: "63abdfebce10cd92c91593a1",
      user: "63ab1221c5df8b6aa35b1b7c",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2022-12-28T06:19:23.358Z",
      __v: 0,
    },
    {
      _id: "63ada2f84a1c290ea12fc77b",
      user: "63ab1221c5df8b6aa35b1b7c",
      title: "New Note",
      description: "Please access the playlist",
      tag: "YouTube",
      date: "2022-12-29T14:23:52.571Z",
      __v: 0,
    },
    {
      _id: "63ada3054ac290ea12fc771b",
      user: "63ab1221c5df8b6aa35b1b7c",
      title: "New Note2",
      description: "Please access the playlist",
      tag: "YouTube",
      date: "2022-12-29T14:24:05.180Z",
      __v: 0,
    },
  ];

  // Add a Note
  const addNote = (title, description, tag) => {
    console.log("Adding a new note")
    // TODO: API Call
    const note = {
      _id: "63ada3054ac290ea12fc771b",
      user: "63ab1221c5df8b6aa35b1b7c",
      title: title,
      description: description,
      tag: tag,
      date: "2022-12-29T14:24:05.180Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  // Delete a Note
  const deleteNote = (id) => {
    console.log("Deleting the note with id" + id);
  };
  // Edit a Note
  const editNote = () => {};

  const [notes, setNotes] = useState(notesInitial);
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
