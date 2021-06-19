import { IconButton, Popper ,Button,Grid} from "@material-ui/core";
import React,{useEffect} from "react";
import "date-fns";
import Services from "../../Services/NotesServices";
import bell from "../../Assets/Icons/bell.svg"
import "./Reminder.css"
import DateTimePicker from "./DateTimePicker";

const service = new Services();

export default function Reminder(props){
    // const [open,setOpen]=React.useState(false);
    const[anchorEl,setAnchorEl]=React.useState(null);
    const [date, setDate] = React.useState("");
    const [time, setTime] = React.useState(null);
    const [dateTime, setDateTime] = React.useState(false)
  
    const callDateTime = () => {
        setDateTime(!dateTime)
        // setOpen(!open)
      }
    
      const getData = (date, time) => {
        // setDate(selectedDate);
        // setTime(selectedTime)
        console.log("GetData inReminder",date,time)
        props.getReminder(date, time);
      }
   
      
    const handleClick =(event)=>{
        // setOpen(!open)
        setAnchorEl(anchorEl ? null : event.currentTarget);
        
    };


    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return( 
        <div>
            <div ><IconButton color="inherit"  edge="start" onClick={e=>handleClick(e)} clickAway={e=>handleClick(e)}>  <img   className="reminder" style={{"width":"18px"}}  src={bell}></img></IconButton></div>
            <Popper position="bottom-end"  id={id} open={open} anchorEl={anchorEl}>
                {dateTime? <DateTimePicker setAll={callDateTime} edit={false} getReminder={getData}  notes={props.notes} />

                // setShowDateTime={setShowDateTime} setShowReminder={setShowReminder}
                :
                   ( <div  className="reminder-popper">
                        <div className="reminder-data">
                            <h4>Reminder:</h4>
                            <div className="data">Later today <div className="data1"> 8:00</div></div>    <br/>
                            
                            <div className="data">Tomorrow <div className="data1">&nbsp; 8:00</div></div>  <br/>
                             <div className="data">Next week</div>  <br/>
                            <div className="data" style={{cursor:"pointer"}} onClick={callDateTime} 
                            // onClick={()=>timeDateSet()}
                             >Pick date & time</div>  <br/>
                            <div className="data">Pick place</div>
                        </div>
                    </div>
                )}
            </Popper>
            </div>
                  

    )
}