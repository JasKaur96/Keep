import { IconButton, Popper } from "@material-ui/core";
import React from "react";
import bell from "../../Assets/Icons/bell.svg"
import "../RemindPopper/Reminder.css";
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';

export default function Image(){
    const [open,setOpen]=React.useState(false);
    const[anchorEl,setanchorEl]=React.useState(null);

    const handleClick =(event)=>{
        setOpen(!open)
        setanchorEl(event.currentTarget)
    };

    // console.log("Reminder", anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return(
        <div>     
            <div onClick={e=>handleClick(e)}> <IconButton  className="icon-place" color="inherit"  edge="start">  
              <ImageOutlinedIcon  className="icon-place" style={{"width":"18px"}} ></ImageOutlinedIcon> </IconButton></div>
            <Popper  id={id} onClick={e=>handleClick(e)} open={open} anchorEl={anchorEl}>
               
             </Popper>
            
            </div>

    )}