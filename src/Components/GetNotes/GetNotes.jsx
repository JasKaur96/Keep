import React, {useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import BrushOutlinedIcon from "@material-ui/icons/BrushOutlined";
import Services from "../../Services/NotesServices";
import "../../Components/GetNotes/GetNotes.css";
import { Dialog, Typography } from "@material-ui/core";
import Addnote from "../Notes/Addnote";

import DisplayNote from "../DisplayNote/DisplayNote";

const service = new Services();

const useStyles = makeStyles((theme) => ({
  titleInput: {
    padding: "10px 15px",
    fontSize: "1rem",
    fontWeight: "550",
    lineHeight: "1.5rem",
    color: "#211a1a",
    width: "100%"
  },

  input: {
    fontSize: "15px",
    fontWeight: "550",
  },

  noteInput: {
    padding: "10px 15px",
  },

  closeNotes: {
    padding: '10px 10px 10px 10px',
    fontSize: '15px',
    justifySelf: "flex-end",
    fontFamily: 'Google Sans ,Roboto,Arial,sans-serif',
    cursor: 'pointer',
  }

}));

export default function GetNotes(props) {
  const classes = useStyles();
  const [open,setOpen] = React.useState(false);
  var [title, setTitle] = React.useState([]);
  var [note, setNote] = React.useState([]);

  useEffect(() => {
   getNote();
  },[]);

  const getNote = ()=>{
    let token =localStorage.getItem('Token')

    service.getNotes(token).then((result)=>{
      let arrayData = result.data.data.data;
      let array = arrayData.reverse();
      setNote(array);
      // setNote({note:result.data.data.data}) 
      console.log(arrayData,"Arrayyy")
      console.log(note);
    })
    .catch(err=>{
      console.log(err);
    })
  }

  return (
            <div>
                <Addnote getNote={getNote} notes={note}/>
                <DisplayNote getNote={getNote} notes={note}/>
            </div>
  );
}