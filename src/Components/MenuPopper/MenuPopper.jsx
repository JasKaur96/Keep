import { IconButton, Menu, Popper } from "@material-ui/core";
import React from "react";
import MoreVertIcon from '@material-ui/icons/MoreVert';
// import "../../Components/RemindPopper/Reminder.css"
import "./MenuPopper.css"
export default function MenuPopper(){
    const [open,setOpen]=React.useState(false);
    const[anchorEl,setanchorEl]=React.useState(null);

    const handleClick =(event)=>{
        setOpen(!open)
        setanchorEl(event.currentTarget)
    };

    console.log("Reminder", anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return(
        <div>
            <div onClick={e=>handleClick(e)}>
            <IconButton  className="icon-place" color="inherit"  edge="start">  <MoreVertIcon  style={{"width":"21px"}}></MoreVertIcon></IconButton>
            </div>
            <Popper  id={id} onClick={e=>handleClick(e)} open={open} anchorEl={anchorEl}>
                <div  className="menu-popper">
                <div className="">
                <div  className="menu-data">Add Label</div>
                 <div  className="menu-data">  Add drawing  </div> 
                 <div  className="menu-data">   Show Checkboxes</div>
                    </div>
                </div>
             </Popper>
            </div>

    )
}