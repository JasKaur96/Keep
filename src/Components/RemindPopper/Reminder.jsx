import { Popper } from "@material-ui/core";
import React from "react";
import bell from "../../Assets/Icons/bell.svg"
import "./Reminder.css"
export default function Reminder(){
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
            <div onClick={e=>handleClick(e)}><img src={bell}></img></div>
            <Popper  id={id} onClick={e=>handleClick(e)} open={open} anchorEl={anchorEl}>
                <div  className="reminder-popper">
                <div className="reminder-data">
                <h4>Reminder:</h4>
                <div >Later today</div>    
                8:00
                <div>
                    Tomorrow  8:00
                </div>
                <div> Next week</div>
               <div>Pick date &time</div>
               <div>Pick 
               place</div>
                </div>
                </div>
             </Popper>
            </div>

    )
}