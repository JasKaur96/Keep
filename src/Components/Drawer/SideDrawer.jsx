
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

  
}));

export default function SideDrawer(props){
  const classes = useStyles();
  // const [open, setOpen] = React.useState(false);

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
 
  // const handleDrawerOpenClose = () => {
  //   console.log("Click drawer")
  //   // props.drawerOpenClose()
  //   setOpen(!open);
  // };
      return(
        <div className={classes.root}>
        <CssBaseline />
        <Drawer onMouseOver={handleDrawerOpen} onMouseLeave={handleDrawerClose} variant="permanent" className={clsx(classes.drawer, {
            [classes.drawerOpen]: props.open,
            [classes.drawerClose]: !props.open,
          })}
          classes={{ paper: clsx({ [classes.drawerOpen]: props.open, [classes.drawerClose]: !props.open,}),
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
        </Drawer>
     
      </div>
    )
}

