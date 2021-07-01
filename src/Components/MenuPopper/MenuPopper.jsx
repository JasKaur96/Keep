import { IconButton, Menu, Popper, Snackbar } from "@material-ui/core";
import React from "react";
import CloseIcon from '@material-ui/icons/Close';
import { Button } from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
// import "../../Components/RemindPopper/Reminder.css"
import "./MenuPopper.css" 
import Services from "../../Services/NotesServices";

const service = new Services();


export default function MenuPopper(props){
    const [open,setOpen]=React.useState(false);
    const[anchorEl,setanchorEl]=React.useState(null);
    const [show,setSnackMsg]=React.useState(false);
    // const handleClick =(event)=>{
    //     setOpen(!open)
    //     setanchorEl(event.currentTarget)
    // };

    const handleClick =(event)=>{
        setOpen(!open)
        setanchorEl(anchorEl ? null : event.currentTarget);
        
    };


    const handleClose = () => {
        setanchorEl({anchorEl:null})
    }

    const deleteNote = (e,value)=>{
       
        let token = localStorage.getItem("Token");

        let data = {
            isDeleted: true,
            noteIdList:[value.id],
        }
        
        console.log(value.id);
        console.log("Props",data) 

        service.deleteNote(data,token).then((result) => {
            console.log(result);        
            setSnackMsg({show:true});
            props.getNote();   
            // window.location.reload();

        }).catch((error) => {
            console.log(error);
        })
    }

    
    const id = open ? 'simple-popper' : undefined;

    return(
        <div> 
            <div>
                <IconButton  className="icon-place" color="inherit"  edge="start"  onClick={e=>handleClick(e)} >
                    <MoreVertIcon className="icon-place" style={{"width":"21px"}}></MoreVertIcon>
                </IconButton>
            </div>
            <Popper  id={id} open={open} anchorEl={anchorEl}>
                <div className="menu-popper">
                    <div className="">
                        <div className="menu-data" onClick={(e)=>deleteNote(e, props.notes)} >Delete Note </div>
                        <div className="menu-data">Add Label</div>
                        <div className="menu-data">Add drawing  </div> 
                        <div className="menu-data">Make a Copy</div> 
                        <div className="menu-data">Show Checkboxes</div>
                    </div>
                </div>
                
             </Popper>
             {/* <Snackbar
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }}
                        open={show} autoHideDuration={6000}  onClick={(e)=>deleteNote(e, props.notes)} message="Note Deleted"
                        action={
                        <React.Fragment>
                           
                            <IconButton size="small" aria-label="close" color="inherit" onClick={()=>handleClick()}>
                                <CloseIcon fontSize="small" />
                            </IconButton>
                        </React.Fragment>
                        }
                    />    */}
            </div>

    )
}