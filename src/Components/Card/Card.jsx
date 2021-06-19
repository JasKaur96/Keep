import React,{useEffect} from "react";
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
import moment from "moment";
import MenuPopper from "../MenuPopper/MenuPopper";
import Image from "../ImagePopper/Image";
import Archive from "../ArchivePopper/ArchivePopper";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';
import { Chip } from "@material-ui/core";
import DateTimePicker from "../RemindPopper/DateTimePicker";
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
  var [note, setNote] = React.useState("");
  var [clr, setColor] = React.useState("");
  const [id, setNoteId] = React.useState();
  const [datePicker, setDateTimePicker] = React.useState(false);
  const [reminder, setReminder] = React.useState("");

  
const handleClose =()=>{
  setOpen(!open);
}

useEffect(() => {
  updateReminderNote();
  // // updateReminder();
  // removeReminder();
 },[]);

 
const handleClickOpen = (e, value) => {
  e.stopPropagation();

console.log("HandleClick open");
props.handleClickOpen(e, value)
}

// useEffect(() => {
//   getDeletedNote();
//  },[]);

// const getDeletedNote = ()=>{
//   let token = localStorage.getItem('Token');
//   console.log("Trash");

//   service.getDeleteNote(token).then((result) => {
//       console.log(result);
  
//       let arrayData = result.data.data.data;
//       let array = arrayData.reverse();
    
//       console.log(arrayData,"Arrayyy")
//       console.log(array,"Array")
//       setNote(array);
//    })
//   .catch((error) => {
//       console.log(error);
//   })
// } 
const onDelete = (e,value) =>{
  let token = localStorage.getItem('Token');
  console.log("Trash");

  
  let data = {
    isDeleted: true,
    noteIdList:[props.value.id],
}
  console.log("Id",value.id)
  service.deleteForever(data,token).then((result) => {
      console.log(result);
      props.getDeletedNote();
      console.log("Result getDeleteNOte",result.data.data.data);
  })
  .catch((error) => {
      console.log(error);
  })
}

const restoreNote = (e,value)=>{
       
  let token = localStorage.getItem("Token");

  let data = {
      isDeleted: false,
      noteIdList:[props.value.id],
  }
  
  console.log(value.id);
  console.log("Props",data)

  service.deleteNote(data,token).then((result) => {
      console.log(result);    
      props.getDeletedNote();       
      // window.location.reload();

  }).catch((error) => {
      console.log(error);
  })
}

const removeReminder = (value) => {
  let token = localStorage.getItem("Token");
  let data = {
      noteIdList:[props.value.id],
      reminder:null
  }
  console.log(data);
  service.removeReminder(data, token).then((result)=>{
      console.log("Remove reminder",result);
      props.updateReminderNote()
  })
  .catch((err)=>{
      console.log(err);
  })
}

const callChange = () => {
  
  setDateTimePicker({datePicker:!datePicker})
  setOpen(!open);
}

const updateReminderNote = () => {
  console.log("reminder Date: ",reminder);
  console.log("Value Date: ",props.value);
  let token = localStorage.getItem("Token");
  let data = {
      noteIdList: [props.value.id],
      reminder: reminder.reminder,
  }
  console.log("reminder Data: ",data);
  service.addReminderNote(data, token).then((result)=>{
     
    console.log("updateReminder note : ",result);
      
      // props.updateReminderNote();
      handleClose();
  })
}
console.log("Reminder",reminder.reminder)

const updateReminder =(date, time)=> {
  if (date !== null && time !== null) {
      let reminder = moment(date).format("MMM D")+", "+ moment(time).format("h:mm:A");
      console.log("Reminder: ",reminder);
      setReminder({reminder: reminder,
      }, () => updateReminderNote());
   // this.updateReminderNote();
  } 
}

console.log("Card Data",reminder.reminder)
   return(<> 
    <div className="">
            <div className="card" style={props.style}>
            <div> 
                <div className="pin" > 
                  <p><h4 style={{width:'90%'}}>{props.value.title}</h4>{props.value.description}</p>                          
                  <img style={{"width":"25px"}} src={pin}></img> 
                 </div>  
                 <Chip onClick={callChange} label={moment(new Date(props.value.reminder)).format("MMM DD,h:mm A")}
              onDelete={() => removeReminder(props.value)}
                style={{"width":"160px"}} />
               
            </div>  
                      
            <div  className="icons-below">
              {props.value.isDeleted === true ?<> <DeleteForeverIcon onClick={(e)=>onDelete(e,props.value)} notes={props.value}/><RestoreFromTrashIcon onClick={(e)=>restoreNote(e,props.value)} notes={props.value}/>                    
                </> :<>
                <Reminder getReminderNote={props.getReminderNote}/><Color notes={props.value} setClr={setColor} />
                  <Image/> 
                  {props.value.isArchived === true ? <Archive notes={props.value} getArchivedNote={props.getArchivedNote}/>:
                  <Archive notes={props.value} getArchivedNote={props.getArchivedNote}/>}
                  <MenuPopper notes={props.value}/>                   </>}
                </div>
                <div>
                {datePicker ? <DateTimePicker editPicker={callChange} reminder={reminder.reminder} 
                    edit={true} dateTime={updateReminderNote} updateReminder={updateReminder}
              />:null}
        </div>
     </div>                    
  </div>

  
  

        </>       
    ) 

}