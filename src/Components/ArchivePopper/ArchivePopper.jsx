import { IconButton, Menu, Popper } from "@material-ui/core";
import React from "react";
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
// import UnarchiveOutlinedIcon from '@material-ui/icons/UnarchiveOutlinedIcon';
// import "../../Components/RemindPopper/Reminder.css"
import "../MenuPopper/MenuPopper.css"
import Services from "../../Services/NotesServices";

const service = new Services();


export default function Archive(props){
    const [open,setOpen]=React.useState(false);
    const[anchorEl,setanchorEl]=React.useState(null);


    const id = open ? 'simple-popper' : undefined;

    const archieveNote = ()=>{
      
        let token = localStorage.getItem("Token");

        let data = {
            isArchived: true,
            noteIdList:[props.notes.id],
        }
        
        console.log(props.notes.id);
        console.log("Props",data)

        service.archiveNote(data,token).then((result) => {
            console.log(result);           
            window.location.reload();

        }).catch((error) => {
            console.log(error);
        })
    }
 
       
    return(
        <div>
            <div>
            <IconButton className="icone-circle" color="inherit"  edge="start">  
            {/* {props.notes.isArchived ? <UnarchiveOutlinedIcon onClick={()=>unArchieveNote(props.notes)}/> :*/}
          
                <ArchiveOutlinedIcon onClick={()=>archieveNote(props.notes)}/>
          
            {/* }    */}
            </IconButton>
            </div>
          
            </div>

    )
}

