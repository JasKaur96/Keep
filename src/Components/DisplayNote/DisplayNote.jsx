import React from "react";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import BrushOutlinedIcon from "@material-ui/icons/BrushOutlined";
// import NoteOptions from "../noteIconOptions/noteOptions.jsx";
import Services from "../../Services/NotesServices";
import "../../Components/GetNotes/GetNotes.css";
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

export default function DisplayNote(props) {
   
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  var [title, setTitle] = React.useState("");
  var [description, setDescription] = React.useState("");
  var [note1, setNote] = React.useState("");
  const [clr, setClr] = React.useState("#fafafa");
  const [noteId, setNoteId] = React.useState();


  const handleClickOpen = (e, data) => {
    e.stopPropagation();
    setEdit(true)
    setTitle(data.title);
    setNote(data.description);
    setClr(data.color);
    setNoteId(data.id);
    setOpen(true);
  };

//   const storeOption = (e, data) => {
//     e.stopPropagation();
//     setNoteId(data);
//   }

  const handleClose = () => {
    setOpen(false);
  };

  const handleTitle =(event)=>{
    setTitle({title: event.target.data})
  }
  const handleDescription =(event)=>{
    setTitle({description: event.target.data})
  }

  const updateNote = (event) => {
    event.stopPropagation()
    let token = localStorage.getItem('Token')
    let data = {
        title: title,
        description: description,
        noteId: noteId
    }
    console.log(data.noteId);
    if(data.title !== "" && data.description !== ""){
        service.updateNotes(data, token).then((result) => {
            // props.updateNote();
            props.getNote();
            handleClose()
            console.log(result);
        })
        .catch((err) => {
            console.log(err);
        })
    }
}
console.log("Props NOtes:",props.notes)
return (
    
    <>
        <div className="display-note">
            {props.notes.map((data) => {
                var style = {backgroundColor : data.color}
                return (
                    <div>
                    <div className="note" style={style}>
                        <div onClick={(e) => handleClickOpen(e, data)}>  
                            <div className="pin"> 
                                <p>{data.title}<br></br>{data.description} </p>
                                <img style={{"width":"25px"}} src={pin}></img>
          
        
                                {/* <BrushOutlinedIcon className=""/>                     */}
                            </div>                            
                            {/* <p>{data.description}</p>   */}
                        </div>   
                        <div className="icons-below"> <Reminder/><Color/><Image/><Archive/><MenuPopper/></div>
                        {/* <div className="closeBtn"> 
                            <button className="close-btn" type="button" value="Close" placeholder="Close">Close</button>
                        </div>  */}
                    </div>
                    
                    <div>          
           
                                           
        </div>        
     
                  </div>  
                )
            })}
        </div>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <div className="display-note">
                <InputBase defaultValue="" multiline className="title" placeholder= " Title" fullWidth
                    onChange={handleTitle} defaultValue={title} inputProps={{ 'aria-label': 'Title ' }}
                />

                <InputBase defaultValue="" multiline className="title" placeholder= " Title" fullWidth onChange={handleDescription} defaultValue={description}
                    inputProps={{ 'aria-label': 'Title ' }}
                />
                <div className="enclose">
                    <div className="inp">
                        <input type="button" onClick={(e)=> updateNote(e)} value="close"/>
                    </div>
                </div>
            </div>
        </Dialog>
    </>
)
}

