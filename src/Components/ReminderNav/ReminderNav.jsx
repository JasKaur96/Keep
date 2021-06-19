

import React, {useEffect} from "react";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import Services from "../../Services/NotesServices";
import "../../Components/DisplayNote/Display.css";
import  "../../Components/Notes/addNotes.css";
import "../../Components/Card/Card.css"
import "../../Components/ReminderNav/Rminder.css"

import Card from "../Card/Card";
// import "../../Components/Notes/addNotes.css";
// import "../../Components/DisplayNote/Display.css";
import ReminderDisplay from "./ReminderDisplay";
import Addnote from "../../Components/Notes/Addnote";

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

export default function ReminderNav(props) {
   
  const classes = useStyles();
  const [note, setNote] = React.useState([]);


  useEffect(() => {
    getReminderNote();
   },[]);
 
 const getReminderNote = (e) => {
    let token = localStorage.getItem('Token');
    console.log('called reminder');

    service.getReminderNote(token).then((result)=> {
        console.log(result);
    
        let arrayData = result.data.data.data;
        let array = arrayData.reverse();      
        console.log(arrayData,"Arrayyy")
        console.log(array,"Array")

        setNote(array);
        console.log("Result getReminderNOte",result.data.data.data);
    })
    .catch((error) => {
        console.log(error);
    })
}


console.log("Props Notes in Reminder Nav:",note)

return ( <>
         <Addnote updateReminderData={getReminderNote}/>
          <ReminderDisplay notes={note} updateReminderNote={props.updateReminderNote}
                    updateReminder={props.updateReminder} render={props.render}/>
         
          {/* <div className="display-note">       
            {note.filter((data) => data.isDeleted === false).filter((data) => data.isArchived === false).reverse().map((value)=>{
                var style = {backgroundColor : value.color} 
                console.log("value Color",value)
                return(
                  <div className="reminder">
                <Card value={value} style={style} getReminderNote={getReminderNote}/>
              </div>
              )}                   
            )}
          </div>  */}
                 
  </>
)
}

