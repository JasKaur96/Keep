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
  var [description, setDescription] = React.useState("");
  var [note1, setNote] = React.useState("");
  const [clr, setClr] = React.useState("");
  const [noteId, setNoteId] = React.useState();


  const handleClickOpen = (e, data) => {
    e.stopPropagation();
    setTitle(data.title);
    setNote(data.description);
    setClr(data.color);
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

const update = () =>{
    
  let data = {
    title: title,
    description: note1,
    id:noteId
    // color:clr
  }

  click();

  if(data.title === '' || data.description === ''){
    console.log("No note ");
  }
  else{
    let token = localStorage.getItem('Token');
    service.updateNotes(data,token).then((data) => {
      props.getNote();
      props.updateNote();
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    })
  }
}
const setColor = (color) => {
  setClr({color: color})
}

console.log("Props Notes:",props.notes)
return ( <>
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
                               </div>                            
                            
                          </div>   
                          <div  className="icons-below"> <Reminder/><Color setColor={setColor}/><Image/><Archive/><MenuPopper/></div>
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

    <Dialog open={open} onClose={handleClose}  aria-labelledby="form-dialog-title">
         <div>
           <div className="editnote" >
              <div>  
               <div className="pin"> <InputBase defaultValue={title} multiline 
                   onChange={(e) => setTitle(e.target.value)} inputProps={{'aria-label': 'Title'}} />
                  <img style={{"width":"25px"}} src={pin}></img>                                    
               </div>                                 
               <InputBase fullWidth onChange={(e)=>setNote(e.target.value)}  multiline defaultValue={note1} />
            </div>   
            <div  className="icons-below"> <Reminder/><Color setColor={setColor}/><Image/><Archive/><MenuPopper/></div>
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

