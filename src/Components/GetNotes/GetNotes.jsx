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
  var [piNote, setPinedNote] = React.useState([]);

  console.log("Value of Getnote",props.getNote)

  useEffect(() => {
   getNote(); 
  },[props.getNote]);
 
  const getNote = ()=>{
    
    let token =localStorage.getItem('Token')  
    
    service.getNotes(token).then((result)=>{

      let arrayData = result.data.data.data;
      // console.log("getnotes.",result.data.data.isArchived);
      let array = arrayData.reverse();
      setNote(array);   
      props.getNoteForSearch(array);     
      props.responseGetNote();
    })
    .catch(err=>{
      console.log(err);
    })
  }

  return (
            <div>
                <Addnote getNote={getNote} />
                <DisplayNote getNote={getNote} notes={note} render={props.render}/>
            </div>
  );
}