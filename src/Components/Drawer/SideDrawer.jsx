
import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import bulb from '../../Assets/Icons/bulb.svg'
import bell from '../../Assets/Icons/bell.svg'
import edit from '../../Assets/Icons/edit.svg'
import archive from '../../Assets/Icons/archive.svg'
import trash from '../../Assets/Icons/trash.svg'
import { IconButton } from '@material-ui/core';

const drawerWidth = 230;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
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
    // '&:focus':{
      // backgroundColor: '#feefc3',
      
      backgroundColor: '#fff',
      // borderRadius:'100rem',
    // },
    // '&:hover':{
    //   backgroundColor:"#feefc3",
   
    // },
    // '&:selection':{
    //   backgroundColor:"#feefc3",
    //   borderRadius: '0 25px 25px 0',
    // }
  },

  newListItems:{
    letterSpacing: '.01785714em',
    fontFamily: 'Google Sans, Roboto, Arial, sans-serif',
    fontSize: '.875rem',
    fontWeight:'500',
    lineHeight:'1.25rem',
    paddingleft: '24px',
    color: 'grey',
    // borderRadius: '0 25px 25px 0',
    backgroundColor:"#feefc3",
    // borderRadius: '50%',
  // '&:focus':{
  //   backgroundColor: '#feefc3',
  //   borderRadius: '0 25px 25px 0',
  // },
  '&:hover':{
    backgroundColor:"#feefc3",
    // borderRadius: '0 25px 25px 0',
  },
  '&:selection':{
    backgroundColor:"#feefc3",
    // borderRadius: '0 25px 25px 0',
  }
  },
  listItems2:{
    letterSpacing: '.01785714em',
    fontFamily: 'Google Sans, Roboto, Arial, sans-serif',
    fontSize: '.875rem',
    fontWeight:'500',
    lineHeight:'1.25rem',
    paddingleft: '4px',
    color: 'grey',
    '&:focus':{
      backgroundColor: '#feefc3',
      
      borderRadius: '0 25px 25px 0',
    },
    '&:hover':{
      backgroundColor:"#feefc3",
      borderRadius: '0 25px 25px 0',
    },

},
 
  
}));

export default function SideDrawer(props){
  const classes = useStyles();
  const [head, setTitle] = React.useState("");  
  const [open, setOpen] = React.useState("");


  const handleDrawerOpen = () => {
    // setOpen(!open);
    props.drawerOpen()
    console.log("draweropen drawer")
  };
  const handleDrawerClose = () => {
    // setOpen(open);
    props.drawerClose()
    console.log("drawerclose drawer")
  };
  const change = () => {
    setOpen({ open: !open });
};
  const sendName =(head)=>{
    props.nameChange(head)
    console.log("Header",head)
  };

      return(
        <div className={classes.root}>
       
        <CssBaseline />
        <Drawer onMouseOver={handleDrawerOpen} onMouseLeave={handleDrawerClose} variant="permanent" className={clsx(classes.drawer, {
            [classes.drawerOpen]: props.open,
            [classes.drawerClose]: !props.open,
          })}
          classes={{ paper: clsx({ [classes.drawerOpen]: props.open, [classes.drawerClose]: !props.open,}),
          }}
          open={props.open}
        >
          
            <ListItem button   className={props.selected == "Keep" ? classes.listItems2 :classes.listItems} 
                onClick={()=>sendName("Keep")}
            >           
              <ListItemIcon > <IconButton   className={props.selected == "Keep" ? classes.newListItems : {backgroundColor:"#fff"}} edge="start">  <img src={bulb} ></img></IconButton></ListItemIcon>
              <ListItemText primary={'Notes'}/>
            </ListItem>
            <ListItem button key={'Reminders'}  className={props.selected == "Reminder" ? classes.listItems2 :classes.listItems} 
                onClick={()=>sendName("Reminder")}>
              <ListItemIcon><IconButton  className={props.selected == "Reminder" ? classes.newListItems : {backgroundColor:"#fff"}} edge="start"> <img src={bell}></img></IconButton></ListItemIcon>
              <ListItemText primary={'Reminders'}/>
            </ListItem>
            <ListItem button key={'Editlabels'} className={props.selected == "Edit" ? classes.listItems2 :classes.listItems} 
                onClick={()=>sendName("Edit")} >
              <ListItemIcon><IconButton   className={props.selected == "Edit" ? classes.newListItems : {backgroundColor:"#fff"}} edge="start"> <img src={edit}></img></IconButton> </ListItemIcon>
               <ListItemText primary={'Edit labels'}/>
            </ListItem>
            <ListItem button key={'Archive'} className={props.selected == "Archive" ? classes.listItems2 :classes.listItems} 
                onClick={()=>sendName("Archive")}>
              <ListItemIcon><IconButton   className={props.selected == "Archive" ? classes.newListItems : {backgroundColor:"#fff"}} edge="start"> <img src={archive}></img></IconButton>
              </ListItemIcon>
              <ListItemText primary={'Archive'}/>
            </ListItem>
            <ListItem button key={'Trash'} className={props.selected == "Trash" ? classes.listItems2 :classes.listItems} 
                onClick={()=>sendName("Trash")}>
              <ListItemIcon><IconButton   className={props.selected == "Trash" ? classes.newListItems : {backgroundColor:"#fff"}}  edge="start"> <img src={trash}></img></IconButton></ListItemIcon>
              <ListItemText primary={'Trash'}/>
            </ListItem>
        </Drawer>
     
      </div>
    )
}

