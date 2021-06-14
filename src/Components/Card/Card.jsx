import React from "react";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import BrushOutlinedIcon from "@material-ui/icons/BrushOutlined";
// import NoteOptions from "../noteIconOptions/noteOptions.jsx";
import Services from "../../Services/NotesServices";
import "../../Components/DisplayNote/Display.css";
import Dialog from "@material-ui/core/Dialog";
import pin from "../../Assets/pin.jpeg";
import Reminder from "../RemindPopper/Reminder";
import Color from "../ColorPopper/Color";
import "../Card/Card.css";
import "../GetNotes/GetNotes.css";
import MenuPopper from "../MenuPopper/MenuPopper";
import Image from "../ImagePopper/Image";
import Archive from "../ArchivePopper/ArchivePopper";
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

export default function Card(props) {
   
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  var [title, setTitle] = React.useState("");
  // var [description, setDescription] = React.useState("");
  var [note1, setNote] = React.useState("");
  var [clr, setColor] = React.useState("");
  const [id, setNoteId] = React.useState();

// setNote=()=>{
//     props.id
// }

   return(<>
    <div className="">
            <div className="card" style={props.style}>
            <div>
                <div className="pin" > 
                  <p><h4 style={{width:'90%'}}>{props.value.title}</h4>{props.value.description}</p>                          
                  <img style={{"width":"25px"}} src={pin}></img> 
                </div>                 
            </div>   
           
            <div  className="icons-below"><Reminder/><Color notes={props.value} setClr={setColor} />
              <Image/><Archive notes={props.value}/><MenuPopper notes={props.value}/>                    
            </div>
         </div>                    
         </div>
        </>       
    ) 

}