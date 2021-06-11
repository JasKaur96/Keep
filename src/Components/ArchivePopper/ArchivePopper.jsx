import { IconButton, Menu, Popper } from "@material-ui/core";
import React from "react";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
// import "../../Components/RemindPopper/Reminder.css"
import "../MenuPopper/MenuPopper.css"
import Services from "../../Services/NotesServices";

const service = new Services();


export default function Archive(props){
    const [open,setOpen]=React.useState(false);
    const[anchorEl,setanchorEl]=React.useState(null);

    const handleClick =(event)=>{
        setOpen(!open)
        setanchorEl(event.currentTarget)
    };

    const handleClose = () => {
        setanchorEl({anchorEl:null})
    }
    const id = open ? 'simple-popper' : undefined;

    const deleteNote = (e,value)=>{
        e.stopPropagation();

        let token = localStorage.getItem("Token");

        let data = {
            isArchived: true,
            noteIdList:id,
        }

        
        console.log(id);
        console.log("Props",data)

        service.archiveNote(data,token).then((result) => {
            console.log(result);           
            window.location.reload();

        }).catch((error) => {
            console.log(error);
        })
    }
 
    
    return(
        <div>
            <div>
            <IconButton className="icone-circle" color="inherit"  edge="start">  <ArchiveOutlinedIcon  onClick={(e)=>deleteNote(e)} open={open}  anchorEl={anchorEl} className="icon-place"  style={{"width":"21px"}}></ArchiveOutlinedIcon></IconButton>
            </div>
            {/* <Popper  id={id} onClick={e=>handleClick(e)} open={open} anchorEl={anchorEl}>
                <div  className="menu-popper">
                <div className="">
                <div  className="menu-data" onClick={(e)=>deleteNote(e)} >Delete Note</div>
                <div  className="menu-data">Add Label</div>
                 <div  className="menu-data">  Add drawing  </div> 
                 <div  className="menu-data">Make a Copy</div> 
                 <div  className="menu-data">   Show Checkboxes</div>
                    </div>
                </div>
             </Popper> */}
            </div>

    )
}
































// import { IconButton, Popper } from "@material-ui/core";
// import React from "react";
// import bell from "../../Assets/Icons/bell.svg"
// import "../RemindPopper/Reminder.css"
// import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';

// import Services from "../../Services/NotesServices";

// const service = new Services();

// export default function Archive(){
//     const [open,setOpen]=React.useState(false);
//     const[anchorEl,setanchorEl]=React.useState(null);

//     const handleClick =(event)=>{
//         setOpen(!open)
//         setanchorEl(event.currentTarget)
//     };

//     const archieveNote = (e,value)=>{
       
//         let token = localStorage.getItem("Token");

//         let data = {
//             isArchived: true,
//             noteIdList:[id],
//         }

        
//         console.log(id);
//         console.log("Props",value)

//         service.archiveNote(data,token).then((result) => {
//             console.log(result);           
//             window.location.reload();

//         }).catch((error) => {
//             console.log(error);
//         })
//     }
//     // console.log("Reminder", anchorEl);
//     const id = open ? 'simple-popper' : undefined;

//     return(
//         <div>
//             <div onClick={e=>handleClick(e)}> 
//             <IconButton className="icon-place" color="inherit"  edge="start">
//                 <ArchiveOutlinedIcon style={{"width":"18px"}} onClick={(e)=>archieveNote(e,notes)}   className="icon-place"></ArchiveOutlinedIcon>
//                 </IconButton></div>
//             <Popper  id={id}  open={open} anchorEl={anchorEl}>
               
//              </Popper>
//             </div>

//     )
// }