import { IconButton, Popper ,Button,Grid, TextField, MenuItem} from "@material-ui/core";
import React,{useEffect} from "react";
import DateFnsUtils from "@date-io/date-fns";
import "date-fns";
import { makeStyles } from '@material-ui/core/styles';
import Services from "../../Services/NotesServices";
import ReminderIcon from "@material-ui/icons/NotificationsOutlined";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {KeyboardDatePicker,
    KeyboardTimePicker,
    MuiPickersUtilsProvider,
  } from "@material-ui/pickers";
import bell from "../../Assets/Icons/bell.svg"
import "./Reminder.css"

const service = new Services();
const currencies = [
  {
    value: 'Do not repeat`',
    label: 'Do not repeat',
  },
  { 
    value: 'Dailly',
    label: 'Dailly',
  },
  {
    value: 'Weekly',
    label: 'Weekly',
  },
  {
    value: 'Monthly',
    label: 'Monthly',
  },
  {
    value: 'Yearly',
    label: 'Yearly',
  },
  {
    value: 'Custom',
    label: 'Custom',
  },
];

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  paper: {
    width:'250px',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
  textField: {
    marginTop:theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DateTimePicker(props){
  
  const classes = useStyles();
    const [open,setOpen]=React.useState(false);
    const[anchorEl,setanchorEl]=React.useState(null);
    const [selectedDate, setSelectedDate] = React.useState(props.reminder);
    const [selectedTime, setSelectedTime] = React.useState(props.reminder);
    const [close, setClose] = React.useState(false);
    
    // const handleClick =(event)=>{
    //     setOpen(!open)
    //     setanchorEl(event.currentTarget)     
    // };

    const handleClose = () => {      
        setOpen(open)    
    };
 
    const handleDateChange = (date) => {
        setSelectedDate(date);
      };
    
      const handleTimeChange = (time) => {
        setSelectedTime(time);
      }
      const onSave = () =>{
        // setOpen(!open)
        // e.stopPropagation();
        handleClose(!open)
        console.log("OnSave method");

        if(props.edit === true){
         
          console.log("if SaveMethod",selectedDate, selectedTime)
          props.updateReminder(selectedDate, selectedTime)
        } 
        else{
          console.log("else SaveMethod")
          console.log("else SaveMethod",selectedDate, selectedTime)
          props.getReminder(selectedDate, selectedTime)
          
        }
      }
    console.log("Props value", props);
    // const id = open ? 'simple-popper' : undefined;
    
    return(<>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className="picker">
       <form className={classes.container} noValidate>
         {/* <div className="dateTimePickerContainer">
         <ArrowBackIcon style={{ marginRight: "7%" }} />
         </div> */}
         <KeyboardDatePicker
            className={classes.textField}
            disableToolbar={false}
            variant="inline"
            format="dd/MM/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date picker"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
            "aria-label": "change date",
            }}
          />
          <KeyboardTimePicker
            className={classes.textField}
            margin="normal"
            id="time-picker"
            label="Time picker"
            value={selectedTime}
            onChange={handleTimeChange}
            KeyboardButtonProps={{
              "aria-label": "change time",
            }}
          />
          <TextField
          id="standard-select-currency"
          select
          className={classes.textField}
          defaultValue={currencies}
          Value={currencies}
          InputLabelProps={{
          shrink: true,
          }}
          inputProps={{
          step: 300, // 5 min
          }}
        >
            {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>            
    </form>
    <div className="saveButton">
                <Button color="primary" variant="text" onClick={onSave}>
                  save
                </Button>
              </div>
    </div>
    </MuiPickersUtilsProvider>




 

        {/* <div  className="reminder-popper"   style={{  "height":"300px" }}>
        <div className="reminder-data" >
        <ArrowBackIcon onClick={()=>setClose(!close)} cursor="pointer" style={{ "margin-left": "10px","margin-top":"20px" }} />
         <div  style={{ "margin-left": "15px","margin-top":"10px" }}>Pick date & time</div>
        
        <div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
            <KeyboardDatePicker  className={classes.textField}  disableToolbar={false}
            variant="inline" format="dd/MM/yyyy" margin="normal" id="date-picker-inline"
            label="Date picker" value={selectedDate} onChange={handleDateChange}
            KeyboardButtonProps={{"aria-label": "change date"}}
          />
          <KeyboardTimePicker
            className={classes.textField}
            margin="normal"
            id="time-picker"
            label="Time picker"
            value={selectedTime}
            onChange={handleTimeChange}
            KeyboardButtonProps={{
              "aria-label": "change time",
            }}
          /> </Grid>
             <TextField id="standard-select-currency" select className={classes.textField}
          defaultValue={currencies}  Value={currencies}  InputLabelProps={{shrink: true,
          }} inputProps={{step: 300, // 5 min
          }}
        >
            {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}> {option.label}
             
            </MenuItem>
          ))}
        </TextField>
        
        </MuiPickersUtilsProvider>
        <div className="saveButton">
            <Button color="primary"  variant="text" onClick={onSave}>save
            </Button>
        </div>
        </div></div></div> */}
   
  
</>
    )
}