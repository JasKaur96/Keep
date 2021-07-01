

import React, {useEffect} from "react";
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
import Card from "../Card/Card";
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

export default function ArchiveNav(props) {
   
  const classes = useStyles();
  const [note, setNote] = React.useState([]);


  useEffect(() => {
    getArchivedNote();
   },[]);
 
const getArchivedNote = ()=>{
    let token = localStorage.getItem('Token');
    console.log("Archive");

    service.getArchiveNote(token).then((result) => {
        console.log(result);

        let arrayData = result.data.data.data;
        let array = arrayData.reverse();
      
        console.log(arrayData,"Arrayyy")
        console.log(array,"Array")
        setNote(array);
        console.log("Result getArchivedNOte",result.data.data.data); 
    })
    .catch((error) => {
        console.log(error);
    }) 
}
 
console.log("Props Notes:",note)

return ( <>
        <div className="display-note">
          {/* {note.filter((data) => data.isArchived === true).reverse().map((value)=>{
            <div>{props.render(note)}</div>
          }
          )} */}

          {props.render(note,getArchivedNote)}
        </div>

  </>
)
}

  {/* var style = {backgroundColor : value.color} 
              console.log("value Color",value)
              return(
              <Card value={value} style={style} getArchivedNote={getArchivedNote}/>
            
            )}                    */}