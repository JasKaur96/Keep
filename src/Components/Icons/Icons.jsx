import React from "react";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import BrushOutlinedIcon from "@material-ui/icons/BrushOutlined";
import IconButton from "@material-ui/core/IconButton";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
// import NoteOptions from "../noteIconOptions/noteOptions.jsx";
import Services from "../../Services/NotesServices";
import "../Notes/addNotes.css";
import Reminder from "../RemindPopper/Reminder";
import GetNotes from "../GetNotes/GetNotes";

export default function Icons(props) {
//   const classes = useStyles();
  const [open,setOpen] = React.useState(false);
  var [title, setTitle] = React.useState(props.editTitle);
  var [note, setNote] = React.useState(props.editDisc);
  
  const click =()=>{
    setOpen(!open);
  }
  
  const close = () =>{
    
    let data = {
      title: title,
      description: note
    }

    click();

    // if(data.title === '' || data.description === ''){
    //   console.log("NO note ");
    // }
    // else{
    //   let token = localStorage.getItem('Token');
    //   service.addNotes(data,token).then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
    // }
  }

  return (<div className="icons-align" >
    <div className="icons-align" >
        <Reminder/>
             
    </div>
    {/* <div >
        <Reminder/>
             
    </div> */}
</div>
  );
}