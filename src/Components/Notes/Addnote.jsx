import React from "react";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import BrushOutlinedIcon from "@material-ui/icons/BrushOutlined";
import IconButton from "@material-ui/core/IconButton";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
// import NoteOptions from "../noteIconOptions/noteOptions.jsx";
import Services from "../../Services/NotesServices";
import "./addNotes.css";
import Reminder from "../RemindPopper/Reminder";
import GetNotes from "../GetNotes/GetNotes";
import Icons from "../Icons/Icons";
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
  
  const click =()=>{
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
            <InputBase style={{"width":"93%"}} defaultValue="" multiline placeholder=" Title"
              onChange={(e) => setTitle(e.target.value)} 
              inputProps={{'aria-label': 'Title'}} />
            <BrushOutlinedIcon/>
          </div>
          <InputBase fullWidth onChange={(e)=>setNote(e.target.value)}  multiline defaultValue="" placeholder=" Take a Note "/>
          
          <div>
          
            <div className="">
            {/* <Icons /> */}
            
         
              <div className="closeBtn"> 
                  {/* <Icons/> */}
                <button className="close-btn" type="button" onClick={close}  value="Close" placeholder="Close">Close</button>
               </div>
             </div>
           </div>
          
        </div>

        {/* <Icons/> */}
        <div className="icons"> <Icons/></div>
      </>
     }
     <GetNotes/>
    </div>

  );
}