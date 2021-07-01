import React, {useEffect} from "react";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import BrushOutlinedIcon from "@material-ui/icons/BrushOutlined";
import "../../Components/Notes/addNotes.css";
import Services from "../../Services/NotesServices";
import "../../Components/DisplayNote/Display.css";
import Card from "../Card/Card";
import "../../Components/ReminderNav/Rminder.css"

import { Chip } from "@material-ui/core";
import ReminderNav from "./ReminderNav";
import Addnote from "../Notes/Addnote";

const service = new Services(); 

export default function ReminderDisplay(props) {
    const [open,setOpen]=React.useState(false);
  const [note, setNote] = React.useState([]); 
  var [title, setTitle] = React.useState("");
  var [description, setDescription] = React.useState("");
  var [clr, setColor] = React.useState("");
  
  const [id, setNotId] = React.useState();
  const [reminder, setReminder] = React.useState();

   const  handleClose = () => {
    setOpen({open: !open}) 
    };
 
    const handleTitle = (event) => {
    setTitle({title: event.target.value})
    }

const handleDescription = (event) => { 
    setDescription({description: event.target.value})
}

console.log("Props Notes in Display Reminder:",props.notes)

return ( <>   
          {/* <Addnote updateReminderData={props.getReminderNote}/>
          <ReminderNav notes={note} updateReminderNote={props.updateReminderNote}
                    updateReminder={props.updateReminder} /> */}
         <div className="display-note">       
            {/* {props.notes.filter((data) => data.isDeleted === false).filter((data) => data.isArchived === false).reverse().map((value)=>{
                var style = {backgroundColor : value.color} 
                console.log("value Color",value)
                return(
                  <div className="reminder">
                <Card value={value} style={style} updateReminderNote={props.updateReminderNote} getReminderNote={props.getReminderNote}/>
              </div>
              )}                   
            )} */}
            {props.render(props.notes)}
          </div> 
  </>
)
}
 


// {note.filter((data) => data.isDeleted === false).filter((data) => data.isArchived === false).reverse().map((value)=>{
//     var style = {backgroundColor : value.color} 
//     console.log("value Color",value)
//     return(
//     <Card value={value} style={style} getReminderNote={getReminderNote}/>
  
//   )}                   
// )}




  {/* <div className="display">
         {note.filter((data) => data.isDeleted === false).filter((data) => data.isArchived === false).reverse().map((value)=>{
            var style = {backgroundColor : value.color} 
            console.log("value Color",value)
            return( <>
                <Card updateReminderNote={props.updateReminderNote}
                    updateReminder={props.updateReminder}
                    notes={props.notes}
                    handleClickOpen={handleClose}
                /></>
                ) })}
        </div>

        <Dialog open={open} onClose={handleClose}  aria-labelledby="form-dialog-title">
         <div>
           <div className="editnote" >
              <div>  
               <div className="pin"> <InputBase value={title} multiline 
                   onChange={(e) => setTitle(e.target.value)} inputProps={{'aria-label': 'Title'}} />
                  <img style={{"width":"25px"}} src={pin}></img>                                    
               </div>                                 
               <InputBase fullWidth onChange={(e)=>setNote(e.target.value)}  multiline value={description} />
               <div>
                    {props.reminder !== null && (
                    <div className="reminder">
                        <Chip onClick={props.editReminder}
                           label={reminder}
                            onDelete={() => props.removeReminder(props.notes)}
                        />
                    </div>
                    )}
                </div>
            </div>   
            <div  className="icons-below"> <Reminder/><Color notes={(e)=>setNote(e.target.value)} setClr={setColor} /><Image/><Archive /><MenuPopper/></div>
              <div className="closebtn"> 
                <button className="close-Btn" type="button" onClick={()=> props.updateReminderNote()}  value="Close" placeholder="Close">Close</button>
              </div> 
            </div>                    
          <div>                                           
        </div>        
       </div>                           
    </Dialog> */}