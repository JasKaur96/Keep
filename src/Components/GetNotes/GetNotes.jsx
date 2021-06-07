import React from "react";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import BrushOutlinedIcon from "@material-ui/icons/BrushOutlined";
import IconButton from "@material-ui/core/IconButton";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
// import NoteOptions from "../noteIconOptions/noteOptions.jsx";
import Services from "../../Services/NotesServices";
import "../../Components/GetNotes/GetNotes.css";
import Reminder from "../RemindPopper/Reminder";
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
  var [title, setTitle] = React.useState();
  var [note, setNote] = React.useState();
  
  const click =()=>{
    setOpen(!open);
  }
  const hoverNote =()=>{
    setOpen(!open);
  }
  
  const close = () =>{
    
  let data = {
    title: title,
    description: note
  }

  click();

  if(data.title === '' || data.description === ''){
    console.log("NO note ");
  }
  else{
    let token = localStorage.getItem('Token');
    service.addNotes(data,token).then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    })
  }
}

  return (
  // <>
  
    <div className="display-note" >    
      {!open ?  
      <div >
        <div className="note">
          <div>
            <h3 >Title here</h3>
            {/* <BrushOutlinedIcon className="title"/> */}
          </div>
          <p>Description here</p>
          
          <div>           
            <div className="">

            {/* <Reminder/> */}
              {/* <div className="closeBtn">
                <button className="close-btn" type="button" onClick={close}  value="Close" placeholder="Close">Close</button>
               </div> */}
             </div>
           </div>

           
        </div>

        <div className="note">
          <div>
            <h3>Title here</h3>            
            {/* <BrushOutlinedIcon className="title"/> */}
          </div>
          <p>Description here</p>
          <div>
            <div className="">
           
            {/* <Reminder/> */}
              {/* <div className="closeBtn">
                <button className="close-btn" type="button" onClick={close}  value="Close" placeholder="Close">Close</button>
               </div> */}
             </div>
           </div>
           
        </div>
        </div>
        :
        <div onMouseOver="">
        <div className="note">
          <div>
            <h3 >Title here</h3>
            <BrushOutlinedIcon className="title"/>
          </div>
          <p>Description here</p>
          
          <div>           
            <div className="">

            {/* <Reminder/> */}
              <div className="closeBtn">
                <button className="close-btn" type="button" onClick={close}  value="Close" placeholder="Close">Close</button>
               </div>
             </div>
           </div>

           
        </div>

        <div className="note">
          <div>
            <h3>Title here</h3>            
            <BrushOutlinedIcon className="title"/>
          </div>
          <p>Description here</p>
          <div>
            <div className="">
           
            {/* <Reminder/> */}
              <div className="closeBtn">
                <button className="close-btn" type="button" onClick={close}  value="Close" placeholder="Close">Close</button>
               </div>
             </div>
           </div>

           
        </div>
        </div>
        }
    
    </div>
  );
}