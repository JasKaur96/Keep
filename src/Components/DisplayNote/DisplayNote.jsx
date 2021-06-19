import React from "react";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import BrushOutlinedIcon from "@material-ui/icons/BrushOutlined";
// import NoteOptions from "../noteIconOptions/noteOptions.jsx";
import Services from "../../Services/NotesServices";
import "../../Components/DisplayNote/Display.css";
import Dialog from "@material-ui/core/Dialog";
import pin from "../../Assets/pin.jpeg";
import "../../Components/Notes/addNotes.css";
import Typography from '@material-ui/core/Typography';
import Reminder from "../RemindPopper/Reminder";
import Card from "../Card/Card";
import MenuPopper from "../MenuPopper/MenuPopper";
import Archive from "../ArchivePopper/ArchivePopper";
import Image from "../ImagePopper/Image";
import Color from "../ColorPopper/Color";
import ReminderDisplay from "../ReminderNav/ReminderDisplay";
import ArchiveNav from "../Archive/Archive";
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

  // const handleTitle =(event)=>{
  //   setTitle({title: event.target.data})
  // }
  // const handleDescription =(event)=>{
  //   setTitle({description: event.target.data})
  // }

  const click =()=>{
    setOpen(!open);
  }

const update = (e) =>{
  e.stopPropagation();
  e.preventDefault();
  let data = {
    title: title,
    description: note1,
    id:id,
    color:clr
  }
  var requestData = new FormData();
  requestData.append("noteId", id);
  // requestData.set("file", state.file);
  requestData.append("title", title);
  requestData.append("description", note1);
  requestData.append("color", clr);

  // console.log("description",id);
  // console.log("Formdata",formData);


  if(data.title === '' || data.description === ''){
    console.log("No note ");
  }
  else{
    let token = localStorage.getItem('Token');
    // console.log(requestData);
    service.updateNotes(requestData,token).then((data) => {
      props.getNote();
      // props.updateNote(); 
      // console.log(data);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  click();
}

// console.log("Props Notes:",props)
return ( <>
        <div className="display-note">
           <>
                  {/* {props.notes.filter((data) => data.isDeleted === false).filter((data) => data.isArchived === false).reverse().map((value)=>{
                    var style = {backgroundColor : value.color} 
                   
                      return(<>
                      
                        <div className="">
                           <div className="card" style={style}>
                          <div>
                              <div className="pin" > 
                                <p><h4 style={{width:'90%'}}>{value.title}</h4>{value.description}</p>                          
                                <img style={{"width":"25px"}} src={pin}></img> 
                              </div>                 
                          </div>   
                        
                          <div  className="icons-below"><Reminder getReminderNote={props.getReminderNote}/><Color notes={props.value} setClr={setColor} />
                            <Image/><Archive notes={value} getArchivedNote={props.getArchivedNote}/><MenuPopper notes={props.value}/>                    
                          </div>

                          <div>
               
                </div>
         </div>                    
         </div>
                        </>
                    )}                   
                  )}              */}
                 {props.render(props.notes)} 
                 
          
                </>
      
        </div>

    <Dialog open={open} onClose={handleClose}  aria-labelledby="form-dialog-title">
         <div>
           <div className="editnote" >
              <div>  
               <div className="pin"> <InputBase value={title} multiline 
                   onChange={(e) => setTitle(e.target.value)} inputProps={{'aria-label': 'Title'}} />
                  <img style={{"width":"25px"}} src={pin}></img>                                    
               </div>                                 
               <InputBase fullWidth onChange={(e)=>setNote(e.target.value)}  multiline value={note1} />
            </div>   
            <div  className="icons-below"> <Reminder/><Color notes={(e)=>setNote(e.target.value)} setClr={setColor} getNote={props.getNote()}/><Image/><Archive  getNote={props.getNote()}/><MenuPopper/></div>
              <div className="closebtn"> 
                <button className="close-Btn" type="button" onClick={(e)=> update(e)}  value="Close" placeholder="Close">Close</button>
              </div> 
            </div>                    
          <div>                                           
        </div>        
       </div>                           
    </Dialog>
  </>
)
}

