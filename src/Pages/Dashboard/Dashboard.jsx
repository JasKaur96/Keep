import SideDrawer from "../../Components/Drawer/SideDrawer";
import Appbar from "../../Components/Header/Appbar";
import React, { Component } from 'react'
import {makeStyles, withStyles} from '@material-ui/core'
import Addnote from "../../Components/Notes/Addnote";
import GetNotes from "../../Components/GetNotes/GetNotes";
import Reminder from "../../Components/ReminderNav/ReminderNav";
import Trash from "../../Components/Trash/Trash";
import Archive from "../../Components/Archive/Archive";
import MapData from "../../Components/MapData/MapData";

const drawerWidth = 230;

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },
    appBar: {
      backgroundColor: "#ffff",
      borderBottom: "lightgray solid 1px",
      boxShadow: "none",
    },
    appBarButton: {
      [theme.breakpoints.down("xs")]: {
        padding: "8px 8px 8px 8px"
      },
    },
    topBar: {
      backgroundColor: "#ffff",
      display: "flex",
      justifyContent: "space-between",
    },
    hide: {
      display: "none",
    },
    
    appBarButton: {
      [theme.breakpoints.down("xs")]: {
        padding: "8px 8px 8px 8px"
      },
    },
   
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    marginTop: "65px",  
  },
  drawerOpen: {
    width: drawerWidth,
    marginTop: "65px",
  },
  drawerClose: {
    marginTop: "65px",
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  listItems: {
    letterSpacing: '.01785714em',
    fontFamily: 'Google Sans, Roboto, Arial, sans-serif',
    fontSize: '.875rem',
    fontWeight:'500',
    lineHeight:'1.25rem',
    paddingleft: '24px',
    color: 'grey',
    borderRadius: '0 25px 25px 0',
  
  '&:focus':{
    backgroundColor: '#feefc3',
    borderRadius: '0 25px 25px 0',
  },
  '&:hover':{
    backgroundColor:"#F6F2F1"
  },
  '&::selection':{
    backgroundColor:"#feefc3"
  }
},
    drawerButton: {
      borderTopRightRadius: "100px",
      borderBottomRightRadius: "100px",
    },
    profileIcon:{
      marginTop: "20px",
      border: "1px solid lightgray",
      borderRadius: "5px",
      backgroundColor:"skyblue"
    },
   
    main: {
      marginTop: "80px",
      marginLeft: "96px",
      zIndex: "-1",
      minHeight: "84vh",
      backgroundColor: "white",
  
    },
    menuButton: {
      color: 'black',
      marginRight: 13,
      // margin-right: 36;
      opacity: '0.7'
    },  
   
    hide: {
      display: '',
    },
    content: {
      width: "95%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
    searchInput:{
      marginLeft: "10px", 
      width: "80%"
    }
  }));

class Dashboard extends Component{
    constructor(props){
        super(props);
          this.state ={
            open: false,
            profile: false,
            selectedRout:'notes'
          }
      }
    
      handleDrawerOpen = () => {
        this.setState({open: false});
        // props.drawerOpen()
        console.log("draweropen drawer")
      };
      
      handleDrawerClose = () => {
        this.setState({open: true});
        // props.drawerClose()
        console.log("drawerclose drawer")
      };
     
      handleProfile = () => {
        console.log("profile button");
        this.setState({ profile: !this.state.profile })  
      }
     
    change = () => {
        this.setState({ open: !this.state.open });
    };

    notes = (value) => {
      this.setState({selectedRout:value})
  }
  
  setRout = (data) => {
      this.setState({selectedRout:data})
      console.log(data);
  }

  displayRenderData =(data)=>{
    return <MapData note={data}/>
  }

  rendering =() => {
    console.log("render inside")
      if(this.state.selectedRout == 'notes'){
        console.log("render inside")
        return <GetNotes render = {this.displayRenderData}/>

      }else if (this.state.selectedRout == 'Reminder'){
        return <Reminder render = { data => <MapData note={data}/>}/>
      }
      else if (this.state.selectedRout == 'Archive'){
        
        console.log("render inside archive",this.state.selectedRout)
        return <Archive render = { data => <MapData note={data}/>}/>
      }
      else if (this.state.selectedRout == 'Trash'){
        console.log("render inside",this.state.selectedRout)
        return <Trash  render = { data => <MapData note={data}/>}/>
      }
      else{
        return <GetNotes render = { data => <MapData note={data}/>}/>
      }
  }
 
    
    render(){
        // const {classes} = this.props;
        // console.log(this.props)
        return(
            <div>
                <Appbar rout={this.setRout}/>
                {this.state.selectedRout}
                <div>
                  {this.rendering()}                  
                </div>
            </div>
        )}
}


export default withStyles(useStyles)(Dashboard)