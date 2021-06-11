

import React from "react";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import BrushOutlinedIcon from "@material-ui/icons/BrushOutlined";
// import NoteOptions from "../noteIconOptions/noteOptions.jsx";
import Services from "../../Services/NotesServices";
import "../../Components/DisplayNote/Display.css";
import Dialog from "@material-ui/core/Dialog";
import pin from "../../Assets/pin.jpeg";
import AddNote from "../Notes/Addnote";
import Typography from '@material-ui/core/Typography';
import Reminder from "../RemindPopper/Reminder";
import GetNotes from "../GetNotes/GetNotes";
import MenuPopper from "../MenuPopper/MenuPopper";
import Archive from "../ArchivePopper/ArchivePopper";
import Image from "../ImagePopper/Image";
import Color from "../ColorPopper/Color";
import Card from "../Card/Card";
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

export default function Trash(props) {
   
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  var [title, setTitle] = React.useState("");
  // var [description, setDescription] = React.useState("");
  var [note1, setNote] = React.useState("");
  var [clr, setColor] = React.useState("");
  const [id, setNoteId] = React.useState();


  const handleClickOpen = (e, data) => {
    e.stopPropagation();
    setTitle(data.title);
    setNote(data.description);
    setColor(data.color);
    setNoteId(data.id);
    setOpen(true);
  };


  const handleClose = () => {
    
    setOpen({open: !open})
    // setOpen(false);
  };

  const click =()=>{
    setOpen(!open);
  }

const onDelete = ()=>{
    let token = localStorage.getItem('Token');
    console.log("Trash");
    service.getDeleteNote(token).then((result) => {
        console.log(result);
        setNote({notes:result.data.data.data})
        console.log(notes);
    })
    .catch((error) => {
        console.log(error);
    })
}

console.log("Props Notes:",props.notes)
return ( <>
        <div className="display-note">
        {props.notes.filter((data) => data.isDeleted === false).filter((data) => data.isArchived === false).reverse().map((value)=>{
                    var style = {backgroundColor : value.color} 
                    console.log("value Color",value)
                    return(
                      <Card value={value} style={style}/>
                    )
                  } 
                  
        )}
        </div>

  </>
)
}

