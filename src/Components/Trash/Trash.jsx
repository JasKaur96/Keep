import React, {useEffect} from "react";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import BrushOutlinedIcon from "@material-ui/icons/BrushOutlined";
// import NoteOptions from "../noteIconOptions/noteOptions.jsx";
import Services from "../../Services/NotesServices";
import "../../Components/DisplayNote/Display.css";
import Dialog from "@material-ui/core/Dialog";
import '../GetNotes/GetNotes.css'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';
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

export default function Trash(props) {
   
  // const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  var [title, setTitle] = React.useState("");
  // var [description, setDescription] = React.useState("");
  var [note1, setDescription] = React.useState("");
  var [clr, setColor] = React.useState("");
  const [id, setNoteId] = React.useState();
  
  const [note, setNote] = React.useState([]);


  useEffect(() => {
    getDeletedNote();
   },[]);
 
const getDeletedNote = ()=>{
    let token = localStorage.getItem('Token');
    console.log("Trash");

    service.getDeleteNote(token).then((result) => {
        console.log(result);
    
        let arrayData = result.data.data.data;
        let array = arrayData.reverse();
      
        console.log(arrayData,"Arrayyy")
        console.log(array,"Array")
        setNote(array);
     })
    .catch((error) => {
        console.log(error);
    })
} 

const onDelete = (e,value) =>{
  let token = localStorage.getItem('Token');
  console.log("Trash");

  
  let data = {
    isDeleted: true,
    noteIdList:[value.id],
}
  console.log("Id",value.id)
  service.deleteForever(data,token).then((result) => {
      console.log(result);
      getDeletedNote();
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
      noteIdList:[value.id],
  }
  
  console.log(value.id);
  console.log("Props",data)

  service.deleteNote(data,token).then((result) => {
      console.log(result);     
      getDeletedNote();       
      // window.location.reload();

  }).catch((error) => {
      console.log(error);
  })
}

console.log("Props Notes:",note)
 
return ( <>
        <div className="display-note">
          {/* {note.filter((data) => data.isDeleted === true).filter((data) => data.isArchived === false).reverse().map((value)=>{
              var style = {backgroundColor : value.color} 
              console.log("value Color",value)
              return(
            
            <div className="">
                <div className="card" style={style}>
                <div>
                    <div className="pin" > 
                      <p><h4 style={{width:'90%'}}>{value.title}</h4>{value.description}</p>                          
                      <img style={{"width":"25px"}} src={pin}></img> 
                    </div>                 
                </div>   
              
                <div  className="icons-below"><DeleteForeverIcon onClick={(e)=>onDelete(e,value)}/><RestoreFromTrashIcon onClick={(e)=>restoreNote(e,value)}/>                    
                </div>
            </div>   
            </div>
            )}                   
          )} */}

            {props.render(note,getDeletedNote)}
        </div>

  </>
)
}

