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
import SearchNoteData from "../../Components/MapData/SearchNoteData";

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
            selectedRout:'notes',
            gridView: false,
            searchNote: [],
            search: "",
            SearchedData:[],
            note:[],
            getNote:false
            
          }
      }
    
      handleDrawerOpen = () => {
        this.setState({open: false});
        // props.drawerOpen()
        // console.log("draweropen drawer")
      };
      
      handleDrawerClose = () => {
        this.setState({open: true});
        // props.drawerClose()
        // console.log("drawerclose drawer")
      };
     
      handleProfile = () => {
        // console.log("profile button");
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
      // console.log(data);
  }

  onClickGrid = () =>{
    this.setState({gridView: !this.state.gridView})
    console.log(this.state.gridView);
  }
  

  callGetNote = ()=>{
      this.setState({getNote: true})
      console.log("Call Getnote", this.state.getNote)
  }

  responseOfGetNOte =()=>{
    this.setState({getNote: false})
    console.log("Response Getnote", this.state.getNote)
  }

  displayRenderData =(data)=>{ 
    return <MapData callGetNote={this.callGetNote} gridView={this.state.gridView} note={data}/>
  }

   
  handleSearchNote = (value) => {
    this.setState({search: value});
    console.log("Dashboard seaarch method",value);
    console.log("Dashboard search Note ====>>>",this.state.search);
    this.filterSearchNote(value)
  }

  getNoteForSearch = (value) => {
    this.setState({searchNote : value}) 
  }

  filterSearchNote = (value)=>{   
    var array = []
    this.state.searchNote.filter(data => data.title.toLowerCase().includes(value.toLowerCase()) || data.description.toLowerCase().includes(value.toLowerCase())).map((searchedData)=>{
        console.log("Filtered data : ", searchedData);
        array.push(searchedData);
        console.log("Array here", array)
        console.log("State here", this.state.SearchedData)
      })
      this.setState({SearchedData: array })
      console.log("Array outside ", array)
  }
  
  rendering =() => {
    // console.log("render inside")
      if(this.state.selectedRout == 'notes'){
        // console.log("render inside")
        return <GetNotes  getNote={this.state.getNote} responseGetNote={this.responseOfGetNOte}
        getNoteForSearch={this.getNoteForSearch} searchNote={this.state.searchNote} search={this.state.search} render = {this.displayRenderData}/>

      }else if (this.state.selectedRout == 'Reminder'){
        return <Reminder render = { data => <MapData note={data}/>}/>
      }
      else if (this.state.selectedRout == 'Archive'){
        // console.log("render inside archive",this.state.selectedRout)
        return <Archive  render = { (data,method) => <MapData note={data} getArchivedNote={method}  callGetNote={this.callGetNote} />}/>
      }
      else if (this.state.selectedRout == 'Trash'){
        // console.log("render inside",this.state.selectedRout)
        return <Trash  render = { (data,method) => <MapData note={data} getDeletedNote={method}  callGetNote={this.callGetNote}/>}/>
      }
      else{
        return <GetNotes render = { data => <MapData note={data} />}/>
      }
  }
  
    render(){
        return(
            <div className="dash">
                <Appbar rout={this.setRout} 
                 handleSearchNote={this.handleSearchNote} searchNote={this.state.searchNote} search={this.state.search} gridView={this.state.gridView} grid={this.onClickGrid}/>
                {this.state.selectedRout}
                <div  className="dash">
                  {this.state.search != "" ? this.displayRenderData(this.state.SearchedData) : this.rendering()}                  
                </div>
            </div>
        )}
}


export default withStyles(useStyles)(Dashboard)