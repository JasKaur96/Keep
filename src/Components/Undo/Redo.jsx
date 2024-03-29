import { IconButton, Popper } from "@material-ui/core";
import React from "react";
import RedoIcon from '@material-ui/icons/Redo';
import "../RemindPopper/Reminder.css"
export default function Redo(){
    const [open,setOpen]=React.useState(false);
    const[anchorEl,setanchorEl]=React.useState(null);

    const handleClick =(event)=>{
        setOpen(!open)
        setanchorEl(event.currentTarget)
    };

    console.log("Undo", anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return( 
        <div>
            <div onClick={e=>handleClick(e)}><IconButton color="inherit"  edge="start">  
            <RedoIcon className="icon-place" style={{"width":"18px"}} />
            </IconButton></div>
           
            </div>

    )
}