import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      "_id": "63abdfebce0cd92c91593a15",
      "user": "63ab1221c5df8b6aa35b1b7c",
      "title": "My Title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2022-12-28T06:19:23.358Z",
      "__v": 0
    },
    {
      "_id": "63ada2f84ac290ea12fc77ba",
      "user": "63ab1221c5df8b6aa35b1b7c",
      "title": "New Note",
      "description": "Please access the playlist",
      "tag": "YouTube",
      "date": "2022-12-29T14:23:52.571Z",
      "__v": 0
    },
    {
      "_id": "63ada3054ac290ea12fc77bc",
      "user": "63ab1221c5df8b6aa35b1b7c",
      "title": "New Note2",
      "description": "Please access the playlist",
      "tag": "YouTube",
      "date": "2022-12-29T14:24:05.180Z",
      "__v": 0
    },
    {
      "_id": "63abdfebce0cd92c91593a15",
      "user": "63ab1221c5df8b6aa35b1b7c",
      "title": "My Title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2022-12-28T06:19:23.358Z",
      "__v": 0
    },
    {
      "_id": "63ada2f84ac290ea12fc77ba",
      "user": "63ab1221c5df8b6aa35b1b7c",
      "title": "New Note",
      "description": "Please access the playlist",
      "tag": "YouTube",
      "date": "2022-12-29T14:23:52.571Z",
      "__v": 0
    },
    {
      "_id": "63ada3054ac290ea12fc77bc",
      "user": "63ab1221c5df8b6aa35b1b7c",
      "title": "New Note2",
      "description": "Please access the playlist",
      "tag": "YouTube",
      "date": "2022-12-29T14:24:05.180Z",
      "__v": 0
    },
    {
      "_id": "63abdfebce0cd92c91593a15",
      "user": "63ab1221c5df8b6aa35b1b7c",
      "title": "My Title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2022-12-28T06:19:23.358Z",
      "__v": 0
    },
    {
      "_id": "63ada2f84ac290ea12fc77ba",
      "user": "63ab1221c5df8b6aa35b1b7c",
      "title": "New Note",
      "description": "Please access the playlist",
      "tag": "YouTube",
      "date": "2022-12-29T14:23:52.571Z",
      "__v": 0
    },
    {
      "_id": "63ada3054ac290ea12fc77bc",
      "user": "63ab1221c5df8b6aa35b1b7c",
      "title": "New Note2",
      "description": "Please access the playlist",
      "tag": "YouTube",
      "date": "2022-12-29T14:24:05.180Z",
      "__v": 0
    }
  ]
  const [notes, setNotes] = useState(notesInitial)
  return (
    <NoteContext.Provider value={{notes, setNotes}}>{props.children}</NoteContext.Provider>
  );
};

export default NoteState;
