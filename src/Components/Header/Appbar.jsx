import { AppBar, Avatar, CssBaseline, IconButton, InputBase, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import RefreshIcon from '@material-ui/icons/Refresh';
import ViewStreamIcon from '@material-ui/icons/ViewAgendaOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AppsIcon from '@material-ui/icons/Apps';
import '../../Pages/Dashboard/Daashboard.css';
import grid from '../../Assets/Icons/grid.svg'
export default function Appbar(props){

    return(
        <div className="header">
            <CssBaseline/>
            <AppBar position='fixed' color='white' className="appBar">
                <Toolbar>
                    <IconButton color="inherit" aria-label="open drawer" edge="start">                           
                        <MenuIcon />
                    </IconButton>
                    <img className="imgKeep" src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="" ></img>
                    <Typography variant="h6" >
                        <span>Keep</span>
                    </Typography>
                    
                    <div className="search">
                        <SearchIcon />
                        <input type="text" placeholder="Search" />
                    </div>
                    {/* <div  className="profilepic">
                        <Avatar alt="" src="/static/images/avatar/3.jpg" />
                    </div> */}
                     
                    <div className="icon"></div>
                    <IconButton color="inherit" aria-label="open drawer" edge="start">  
                        <RefreshIcon /></IconButton>
                            
                    <IconButton color="inherit" aria-label="open drawer" edge="start"><img src={grid}></img></IconButton>
                    <IconButton color="inherit" aria-label="open drawer" edge="start"> <SettingsOutlinedIcon />
                    </IconButton>
                        
                    <div className="icon1"><IconButton color="inherit" aria-label="open drawer" edge="start">  
                        <AppsIcon /></IconButton>
                    </div>
                    <div className="profilepic">
                        <Avatar/>
                   </div>
                 </Toolbar>
            </AppBar>            
        </div>
    )
}