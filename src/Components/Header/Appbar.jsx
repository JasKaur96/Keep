import { AppBar, Avatar,Drawer,IconButton, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import RefreshIcon from '@material-ui/icons/Refresh';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AppsIcon from '@material-ui/icons/Apps';
import '../../Pages/Dashboard/Daashboard.css';
import grid from '../../Assets/Icons/grid.svg';
import SideDrawer from "../Drawer/SideDrawer";

import bulb from '../../Assets/Icons/bulb.svg'
import bell from '../../Assets/Icons/bell.svg'
import edit from '../../Assets/Icons/edit.svg'
import archive from '../../Assets/Icons/archive.svg'
import trash from '../../Assets/Icons/trash.svg'
import clsx from "clsx";
import React from "react";


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

    const handleDrawerOpen = () => {
      setOpen(true);
        console.log("in App bar open")
    };
    const handleDrawerClose = () => {
      setOpen(false);
      console.log("in App bar close")
      };
   
    const handleDrawerOpenClose = () => {
      console.log("Click drawer app")
      setOpen({open: !props.open});
    };
   const handleToggle = () => {
      console.log("open");
  }
    return(
        <div className="header">
           
            <AppBar position='fixed' color='white' className="appBar">
                <Toolbar>
                    <IconButton onClick={()=>handleDrawerOpenClose} 
                    className={clsx(classes.menuButton, {[classes.menuButton]: open, [classes.hide]: !open,
                      })} 
                      color="inherit" edge="start">                           
                        <MenuIcon/>
                    </IconButton>
                    <img className="imgKeep" src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="" ></img>
                    <Typography variant="h6" >
                        <span>Keep</span>
                    </Typography>
                    
                    <div className="search">
                    <IconButton color="inherit" edge="start">    
                        <SearchIcon /></IconButton>
                        <input type="text" placeholder="Search" />
                    </div>
                    {/* <div  className="profilepic">
                        <Avatar alt="" />
                    </div> */}
                     
                    <div className="icon"></div>
                    <IconButton color="inherit"  edge="start">  
                        <RefreshIcon /></IconButton>
                            
                    <IconButton color="inherit"  edge="start"><img src={grid}></img></IconButton>
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
            <SideDrawer open={open} drawerOpen={handleDrawerOpen} drawerClose={handleDrawerClose} drawerOpenClose={handleDrawerOpenClose}
          // className={clsx(classes.drawer, {
          //       [classes.drawerOpen]: open,
          //       [classes.drawerClose]: !open,
          //     })}
          //     classes={{ paper: clsx({ [classes.drawerOpen]: open, [classes.drawerClose]: !open,}),
          //     }}
            />
            {/* <Drawer onMouseOver={drawerOpen} onMouseLeave={drawerClose} variant="permanent" className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
              })}
              classes={{ paper: clsx({ [classes.drawerOpen]: open, [classes.drawerClose]: !open,}),
              }}
            >
          
            <ListItem button key={'Notes'} className={classes.listItems} >
            
              <ListItemIcon > <IconButton  edge="start">  <img src={bulb} ></img></IconButton></ListItemIcon>
              <ListItemText primary={'Notes'}/>
            </ListItem>
            <ListItem button key={'Remainders'} className={classes.listItems}>
              <ListItemIcon><IconButton  edge="start"> <img src={bell}></img></IconButton></ListItemIcon>
              <ListItemText primary={'Remainders'}/>
            </ListItem>
            <ListItem button key={'Editlabels'} className={classes.listItems} >
              <ListItemIcon><IconButton  edge="start"> <img src={edit}></img></IconButton> </ListItemIcon>
              <ListItemText primary={'Edit labels'}/>
            </ListItem>
            <ListItem button key={'Archive'} className={classes.listItems}>
              <ListItemIcon><IconButton edge="start"> <img src={archive}></img></IconButton>
              </ListItemIcon>
              <ListItemText primary={'Archive'}/>
            </ListItem>
            <ListItem button key={'Trash'} className={classes.listItems}>
              <ListItemIcon><IconButton  edge="start"> <img src={trash}></img></IconButton></ListItemIcon>
              <ListItemText primary={'Trash'}/>
            </ListItem>
        </Drawer> */}
        </div>
    )
}