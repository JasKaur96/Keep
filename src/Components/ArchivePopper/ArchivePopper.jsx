import { Button, IconButton, Menu, Popper, Snackbar } from "@material-ui/core";
import React from "react";
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import UnarchiveOutlinedIcon from '@material-ui/icons/UnarchiveOutlined';
// import "../../Components/RemindPopper/Reminder.css"
import "../MenuPopper/MenuPopper.css"

import CloseIcon from '@material-ui/icons/Close';
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
            props.getNote();           
            // window.location.reload();

        }).catch((error) => {
            console.log(error);
        })
    }

    const unArchieveNote = ()=>{
      
        let token = localStorage.getItem("Token");

        let data = {
            isArchived: false,
            noteIdList:[props.notes.id],
        }
        
        console.log(props.notes.id);
        console.log("Props",data)

        service.archiveNote(data,token).then((result) => {
            console.log("unarchived",result);  
            props.getArchivedNote();         
            // window.location.reload();

        }).catch((error) => {
            console.log(error);
        })
    }
    const close =()=>{
        setOpen(!open); 
      }
      
    // console.log(props.notes);
       
    return(
        // console.log(props.notes);
        <div>
            <div> 
            <IconButton  className="icon-place" color="inherit"  edge="start" onClick={()=>close()}>  
            {props.notes.isArchived === true?<>
                 <UnarchiveOutlinedIcon className="icon-place" onClick={()=>unArchieveNote()}  style={{"width":"20px"}} />
                  {/* <Snackbar
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }}
                        open={open} autoHideDuration={6000} onClose={()=>close()} message="Note UnArchived"
                        action={
                        <React.Fragment>
                            <Button color="secondary" size="small" 
                            onClick={()=>unArchieveNote()}>
                                UNDO
                            </Button>
                            <IconButton size="small" aria-label="close" color="inherit" onClick={()=>close()}>
                                <CloseIcon fontSize="small" />
                            </IconButton>
                        </React.Fragment>
                        }
                    />   */}
                      </>:<>
                 <ArchiveOutlinedIcon className="icon-place" onClick={()=>archieveNote()}  style={{"width":"20px"}}/>
                 {/* <Snackbar
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }}
                        open={open} autoHideDuration={6000} onClose={()=>close()} message="Note archived"
                        action={
                        <React.Fragment>
                            <Button color="secondary" size="small" 
                            onClick={()=>archieveNote()} >
                                UNDO
                            </Button>
                            <IconButton size="small" aria-label="close" color="inherit" onClick={()=>close()}>
                                <CloseIcon fontSize="small" />
                            </IconButton>
                        </React.Fragment>
                        }
                    />    */}
                    </>
             }
             <Snackbar
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }}
                        open={open} autoHideDuration={6000} onClose={()=>close()}  message={props.isArchived === true ? ("Note UnArchived") :( "Note Archived") }
                        action={
                        <React.Fragment>
                            <Button color="secondary" size="small" onClick={()=>unArchieveNote()}>
                                UNDO
                            </Button>
                            <IconButton size="small" aria-label="close" color="inherit" onClick={()=>close()}>
                                <CloseIcon fontSize="small" />
                            </IconButton>
                        </React.Fragment>
                        }
                    />    
            </IconButton>
           
            </div>
          
            </div>

    )
}

