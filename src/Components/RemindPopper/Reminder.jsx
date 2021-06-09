import { IconButton, Popper } from "@material-ui/core";
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
            <div onClick={e=>handleClick(e)}><IconButton  className="" color="inherit"  edge="start">  <img  src={bell}></img></IconButton></div>
            <Popper position="bottom-end"  id={id} onClick={e=>handleClick(e)} open={open} anchorEl={anchorEl}>
                <div  className="reminder-popper">
                    <div className="reminder-data">
                        <h4>Reminder:</h4>
                        <div className="data">Later today <div className="data1"> 8:00</div></div>    <br/>
                           
                        <div className="data">Tomorrow <div className="data1">&nbsp; 8:00</div></div>  <br/>
                            <div className="data">Next week</div>  <br/>
                            <div className="data">Pick date &time</div>  <br/>
                            <div className="data">Pick place</div>
                        </div>
                </div>
             </Popper>
            </div>

    )
}