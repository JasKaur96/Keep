import { IconButton, Popper } from "@material-ui/core";
import React from "react";
import UndoIcon from '@material-ui/icons/Undo';
import bell from "../../Assets/Icons/bell.svg"
import "../RemindPopper/Reminder.css"
export default function Undo(){
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
            <div onClick={e=>handleClick(e)}><IconButton  className="" color="inherit"  edge="start">  
            <UndoIcon  style={{"width":"21px"}}/>
            </IconButton></div>
           
            </div>

    )
}