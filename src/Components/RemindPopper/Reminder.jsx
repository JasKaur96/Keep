import { IconButton, Popper ,Button,Grid} from "@material-ui/core";
import React,{useEffect} from "react";
import DateFnsUtils from "@date-io/date-fns";
import "date-fns";

import ReminderIcon from "@material-ui/icons/NotificationsOutlined";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {KeyboardDatePicker,
    KeyboardTimePicker,
    MuiPickersUtilsProvider,
  } from "@material-ui/pickers";
import bell from "../../Assets/Icons/bell.svg"
import "./Reminder.css"

export default function Reminder(){
    const [open,setOpen]=React.useState(false);
    const[anchorEl,setanchorEl]=React.useState(null);
    const [showDateTime, setShowDateTime] =React.useState(false);   
    const [showReminder, setShowReminder] = React.useState(false);
   
    useEffect(() => {
        timeDateSet();
    },[]);
     
    
    const handleClick =(event)=>{
        setOpen(!open)
        setanchorEl(event.currentTarget)     
        setShowReminder(!showReminder)
    };

   const timeDateSet=(e)=>{
             
        // setShowDateTime(!showDateTime)
        // setShowReminder({showReminder:true})

        console.log("timeSet method",showDateTime)
        console.log("reminder method",showReminder)
   }
    // console.log("Reminder", anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return( 
        <div>
            <div onClick={e=>handleClick(e)}><IconButton color="inherit"  edge="start">  <img   className="reminder" style={{"width":"18px"}}  src={bell}></img></IconButton></div>
            <Popper position="bottom-end"  id={id} onClick={e=>handleClick(e)} open={open} anchorEl={anchorEl}>
                {showReminder?(
                    <div  className="reminder-popper">
                    <div className="reminder-data">
                        <h4>Reminder:</h4>
                        <div className="data">Later today <div className="data1"> 8:00</div></div>    <br/>
                           
                        <div className="data">Tomorrow <div className="data1">&nbsp; 8:00</div></div>  <br/>
                            <div className="data">Next week</div>  <br/>
                            <div className="data" 
                                onClick={(e)=>setShowReminder(!showReminder)} 
                            >Pick date & time</div>  <br/>
                            <div className="data">Pick place</div>
                        </div>
                </div>
                ):
                (
                    <div  className="reminder-popper" >
                    <div className="reminder-data" onClick={e=>handleClick(e)}>
                    <ArrowBackIcon style={{ marginRight: "7%" }} />
                     <div>Pick date & time</div>
            
                    
                    <div>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around">
                        <KeyboardDatePicker
                            disableToolbar={false}
                            variant="inline"
                            format="dd/MM/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Date picker"
                            // value={selectedDate}
                            // onChange={(date) => setSelectedDate(date)}
                            KeyboardButtonProps={{
                            "aria-label": "change date",
                            }}
                        />
                        <KeyboardTimePicker
                            margin="normal"
                            id="time-picker"
                            label="Time picker"
                            // value={selectedDate}
                            // onChange={(date) => setSelectedDate(date)}
                            KeyboardButtonProps={{
                            "aria-label": "change time",
                            }}
                        />
                        </Grid>
                    </MuiPickersUtilsProvider>
                    <div className="saveButton">
                        <Button color="primary" variant="text"
                        //  onClick={()=>handleDateChange()}
                        >
                        save
                        </Button>
                    </div>
                    </div></div></div>
                        
                    )}
             </Popper>
            </div>

    )
}