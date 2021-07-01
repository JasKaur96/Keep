import React,{useEffect} from "react";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import BrushOutlinedIcon from "@material-ui/icons/BrushOutlined";
import IconButton from "@material-ui/core/IconButton";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
// import NoteOptions from "../noteIconOptions/noteOptions.jsx";
import Services from "../../Services/NotesServices";
import "./addNotes.css";
import pin from "../../Assets/pin.jpeg";
import Reminder from "../RemindPopper/Reminder";
import Card from "../Card/Card";
import MenuPopper from "../MenuPopper/MenuPopper";
import Archive from "../ArchivePopper/ArchivePopper";
import Image from "../ImagePopper/Image";
import Color from "../ColorPopper/Color";
import Undo from "../Undo/Undo";
import Redo from "../Undo/Redo";

import moment from 'moment';
import { Chip } from "@material-ui/core";

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

export default function Addnote(props) {
  const classes = useStyles();
  const [open,setOpen] = React.useState(false);
  var [title, setTitle] = React.useState();
  var [note, setNote] = React.useState();  
  var [clr, setColor] = React.useState();  
  var [id, setNoteId] = React.useState();
  var [reminder, setReminder] = React.useState([]);

  // useEffect(() => {
  //   getReminderData();
  // }, [])

  var getReminderData = (date, time) => {
        
    if (date !== null && time !== null) {
        let reminder = moment(date).format("MMM D")+", "+ moment(time).format("h:mm:A");
        setReminder({reminder: reminder});
        console.log("Reminder: ",reminder);
        console.log(moment(date).format("MMM D"));
        console.log(moment(time).format("h:mm:A"));
    }
}

// const getnote =()=>{
//   props.getNote();
// }

const handleReminder = () => {
    setReminder({reminder: null});
}
  const click =()=>{
    setOpen(!open);
  }
  
  const close = () =>{
    
    let data = {
      title: title,
      description: note,
      color:clr,
      id:id, 
      reminder: reminder.reminder
    }

    if(data.title === '' || data.description === ''){
      console.log("No note ");
    }
    else{
      let token = localStorage.getItem('Token');
      service.addNotes(data,token).then((data) => {
        props.updateReminderData();
        // props.getNote();
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      })
    }

    click();
  }
  // const getNote=()=>{
  //   props.getNote();
  // }

// console.log("ADd Notes",props)

  return (
    <div >
      {!open ? 
        <div className="takenote">
          <input type="text" onClick={click}  placeholder="Take a Note..." />
          <CheckBoxOutlinedIcon/>
          <BrushOutlinedIcon/>
          <ImageOutlinedIcon/>
        </div>     
      :<>
        <div className="brieftakenote">
          <div >
            <InputBase style={{"width":"93%"}} defaultValue="" multiline placeholder="Title"
              onChange={(e) => setTitle(e.target.value)} inputProps={{'aria-label': 'Title'}} />
            <img style={{"width":"25px"}} src={pin}></img>
            <InputBase fullWidth onChange={(e)=>setNote(e.target.value)}  multiline defaultValue="" placeholder="Take a Note "/>
            <div>
                                {props.reminder !== '' && (
                                    <div className="reminder">
                                    {/* <Chip label={props.reminder} onDelete={() => handleReminder()} size="small"
                                    /> */}
                                    </div>
                                )}
                          </div>
          </div>
          <div>          
            <div className="">
              <div className="closeBtn">  
                <button className="close-btn" type="button" onClick={close}  value="Close" placeholder="Close">Close</button>
               </div>
             </div>
           </div>          
        </div>        
        <div className="icons"> 
           
        <Reminder getReminder={getReminderData}  getNote={props.getNote} notes={props}/><Color  getNote={props.getNote} onChange={(e)=>setNoteId(e.target.value)} setClr={setColor} /><Archive  getNote={props.getNote} notes={props}/><Image/><MenuPopper  getNote={props.getNote}/>

        <Undo/><Redo/></div>
      </>
     }
     {/* <GetNotes/> */}
    </div>
 
  );
}