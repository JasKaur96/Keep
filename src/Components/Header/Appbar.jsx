import { AppBar, Avatar,Drawer,IconButton, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import RefreshIcon from '@material-ui/icons/Refresh';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AppsIcon from '@material-ui/icons/Apps';
import '../../Pages/Dashboard/Daashboard.css';
import grid from '../../Assets/Icons/grid.svg';
import SideDrawer from "../Drawer/SideDrawer";
import clsx from "clsx";
import React from "react";
import Search from "../Search/Search";

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

export default function Appbar(props){
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [heading, setHeader] =React.useState("Keep")

    const handleDrawerOpen = () => {
      setOpen(true);
        console.log("in App bar open")
    };
    const handleDrawerClose = () => {
      setOpen(false);
      console.log("in App bar close")
      };
   
    const handleDrawerOpenClose = () => {
      console.log("Click drawer app", !open)
      setOpen(!open);
    };
    const handleToggle = () => {
      console.log("open");
    }
    const change = () => {
        setOpen({ open: !open });
    };
  
const headerSet =(head)=>{
  heading=[head]
}
  const changeName = (head) =>{ 
    setHeader(head)
    props.rout(head);
    // onChange(head)
  }
  // console.log("Header AppBar",heading)
    return(
        <div className="header">
           
            <AppBar position='fixed' color='inherit' className="appBar"> 
                <Toolbar>
                    <IconButton onClick={handleDrawerOpenClose} 
                      className={clsx(classes.menuButton, {[classes.menuButton]: open, [classes.hide]: !open, 
                      })} 
                      color="inherit" edge="start">                           
                        <MenuIcon/>
                    </IconButton>
                    <img className="imgKeep" src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="" ></img>
                    <Typography variant="h6" >
                        <span>{heading}</span>
                    </Typography>
                     
                    <div className={classes.searchInput}>
                        {/* <IconButton color="inherit" edge="start">    
                        <SearchIcon /></IconButton>
                        <input type="text" placeholder="Search" /> */}
                        <Search handleSearchNote={props.handleSearchNote} />
                    </div>
                    
                    <div className="icon"></div>
                    <IconButton color="inherit"  edge="start">  
                        <RefreshIcon onClick={() => window.location.reload(false)}/></IconButton>
                            
                    <IconButton color="inherit"  edge="start"><img onClick={()=>props.grid()} src={props.gridView===false ? "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNMywzIEwxMCwzIEMxMC41NSwzIDExLDMuNDUgMTEsNCBMMTEsMTAgQzExLDEwLjU1IDEwLjU1LDExIDEwLDExIEwzLDExIEMyLjQ1LDExIDIsMTAuNTUgMiwxMCBMMiw0IEMyLDMuNDUgMi40NSwzIDMsMyBaIE0zLDEzIEwxMCwxMyBDMTAuNTUsMTMgMTEsMTMuNDUgMTEsMTQgTDExLDIwIEMxMSwyMC41NSAxMC41NSwyMSAxMCwyMSBMMywyMSBDMi40NSwyMSAyLDIwLjU1IDIsMjAgTDIsMTQgQzIsMTMuNDUgMi40NSwxMyAzLDEzIFogTTE0LDMgTDIxLDMgQzIxLjU1LDMgMjIsMy40NSAyMiw0IEwyMiwxMCBDMjIsMTAuNTUgMjEuNTUsMTEgMjEsMTEgTDE0LDExIEMxMy40NSwxMSAxMywxMC41NSAxMywxMCBMMTMsNCBDMTMsMy40NSAxMy40NSwzIDE0LDMgWiBNMTQsMTMgTDIxLDEzIEMyMS41NSwxMyAyMiwxMy40NSAyMiwxNCBMMjIsMjAgQzIyLDIwLjU1IDIxLjU1LDIxIDIxLDIxIEwxNCwyMSBDMTMuNDUsMjEgMTMsMjAuNTUgMTMsMjAgTDEzLDE0IEMxMywxMy40NSAxMy40NSwxMyAxNCwxMyBaIE05LDkgTDksNSBMNCw1IEw0LDkgTDksOSBaIE05LDE5IEw5LDE1IEw0LDE1IEw0LDE5IEw5LDE5IFogTTIwLDkgTDIwLDUgTDE1LDUgTDE1LDkgTDIwLDkgWiBNMjAsMTkgTDIwLDE1IEwxNSwxNSBMMTUsMTkgTDIwLDE5IFoiIGlkPSJwYXRoLTEiPjwvcGF0aD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJncmlkX3ZpZXdfMjRweCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBvbHlnb24gaWQ9ImJvdW5kcyIgZmlsbC1vcGFjaXR5PSIwIiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjAgMCAyNCAwIDI0IDI0IDAgMjQiPjwvcG9seWdvbj4KICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgPC9tYXNrPgogICAgICAgIDx1c2UgaWQ9Imljb24iIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICA8L2c+Cjwvc3ZnPgo=" : "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGlkPSJsaXN0X3ZpZXdfMjRweCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBvbHlnb24gaWQ9ImJvdW5kcyIgZmlsbC1vcGFjaXR5PSIwIiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjAgMCAyNCAwIDI0IDI0IDAgMjQiPjwvcG9seWdvbj4KICAgICAgICA8cGF0aCBkPSJNMjAsOSBMNCw5IEw0LDUgTDIwLDUgTDIwLDkgWiBNMjAsMTkgTDQsMTkgTDQsMTUgTDIwLDE1IEwyMCwxOSBaIE0zLDMgQzIuNDUsMyAyLDMuNDUgMiw0IEwyLDEwIEMyLDEwLjU1IDIuNDUsMTEgMywxMSBMMjEsMTEgQzIxLjU1LDExIDIyLDEwLjU1IDIyLDEwIEwyMiw0IEMyMiwzLjQ1IDIxLjU1LDMgMjEsMyBMMywzIFogTTMsMTMgQzIuNDUsMTMgMiwxMy40NSAyLDE0IEwyLDIwIEMyLDIwLjU1IDIuNDUsMjEgMywyMSBMMjEsMjEgQzIxLjU1LDIxIDIyLDIwLjU1IDIyLDIwIEwyMiwxNCBDMjIsMTMuNDUgMjEuNTUsMTMgMjEsMTMgTDMsMTMgWiIgaWQ9Imljb24iIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4K"}></img></IconButton>
                    <IconButton color="inherit"  edge="start"> <SettingsOutlinedIcon />
                    </IconButton> 
                        
                    <div className="icon1"><IconButton color="inherit"  edge="start">  
                        <AppsIcon /></IconButton>
                    </div>
                    <div className="profilepic">
                        <Avatar/>
                   </div>
                 </Toolbar>
            </AppBar>  
            <SideDrawer open={open} drawerOpen={handleDrawerOpen} drawerClose={handleDrawerClose} 
              drawerOpenClose={handleDrawerOpenClose} nameChange={changeName} selected={heading}
            />
          
        </div>
    )
}