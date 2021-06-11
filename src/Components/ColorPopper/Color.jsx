import PaletteOutlinedIcon from '@material-ui/icons/PaletteOutlined';
import UndoIcon from '@material-ui/icons/Undo';
import { IconButton, Popper } from "@material-ui/core";
import React from "react";
import bell from "../../Assets/Icons/bell.svg"
import "../ColorPopper/Color.css"
import Services from "../../Services/NotesServices"
const service = new Services();

export default function Color(props){
    const[open,setOpen]=React.useState(false)
    const[anchorEl,setanchorEl]=React.useState(null)

    const handleClick = (event) => {
        setOpen(!open)
        setanchorEl(event.currentTarget)
    }

    const id = open ? 'simple-popper' : undefined;  

    const updateNote = (e, colorValue,value) => {
        // console.log("e and value",e.target.value)
        // props.setColor(colorValue)
        let token = localStorage.getItem("Token")
        let data = {
            noteIdList:[value.id],
            color: colorValue,
        }
        console.log("Props",props.notes)
        console.log("Color: ",data);
        service.colorChange(data, token).then((result)=> {
            console.log(data);
            console.log(result);
            window.location.reload();
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const colors = ["#fafafa" ,"#ef9a9a" , "#ffcc80" ,"#fff59d" ,"#dcedc8" ,"#b2dfdb" , "#e0f7fa" ,"#4fc3f7" ,
                    "#b39ddb" ,"#f8bbd0" ,"#a1887f" ,"#cfd8dc" ,
                    ];
    return (
        <div>
            <IconButton  className="icon-place" color="inherit"  edge="start">  <PaletteOutlinedIcon  className="icon-place" aria-describedby={id} type="button" onClick={handleClick} style={{cursor:"pointer", width:"20px"}}/>
            </IconButton><Popper  placement="top-start" id={id} open={open} anchorEl={anchorEl}>
                <div>
                    {
                        open ? <div className="colorbox">
                            {
                                colors.map((value) => {
                                    return (
                                        <>
                                            <div className="colorsmall" onClick={(e)=>updateNote(e, value,props.notes)} style={{backgroundColor:value}} ></div>
                                        </>
                                    )
                                })
                            }
                        </div>:null
                    }
                </div>

            </Popper>
        </div>
    )
}






//     const [open,setOpen]=React.useState(false);
//     const [anchorEl, setAnchorEl] = React.useState(null);
//     const [anchorE2, setAnchorE2] = React.useState(null);
//     const [noteId, setNoteId] = React.useState(props.editId);
//     const [edit, setEdit] = React.useState(props.setEdited);
//     const [archive, setArchive] = React.useState(props.archive);
//     const [trash, setTrash] = React.useState(props.trash);
  
//     const colors = [
//        "#fafafa" ,
//        "#ef9a9a" ,
//        "#ffcc80" ,
//        "#fff59d" ,
//        "#dcedc8" ,
//        "#b2dfdb" ,
//        "#e0f7fa" ,
//        "#4fc3f7" ,
//        "#b39ddb" ,
//        "#f8bbd0" ,
//        "#a1887f" ,
//        "#cfd8dc" ,
//     ];

    
// //   const colorsHandleClick = (event) => {
// //     setAnchorEl(event.currentTarget);
// //   };

//   const colorsHandleClose = () => {
//     setAnchorEl(null);
//   };

//     const handleClick =(event)=>{
//         setOpen(!open)
//         setAnchorEl(event.currentTarget);
//     };
//     const passColor = (e, colr) => {
//         e.stopPropagation();
//         if (edit) {
//           let data = {
//             color: colr,
//             noteIdList: [noteId],
//           };
//           service.changeColor(data).then((data) => {
//               console.log("Update Color: " + data);
//               props.getall();
//             })
//             .catch((err) => {
//               console.log("Error  " + err);
//             });
//         }
//           props.setClr(colr);
//       };
    
//     console.log("Color", anchorEl);
//     const id = open ? 'simple-popper' : undefined;

//     const updateNote = (e, colorValue, value) => {
//         let token = localStorage.getItem("Token")
//         let data = {
//             noteIdList: [value.id],
//             color: colorValue,
//         }
//         console.log("For color: ",data);
//         service.colorChange(data, token).then((result)=> {
//             console.log(data);
//             console.log(result);
//             window.location.reload();
//         })
//         .catch((error) => {
//             console.log(error);
//         })
//     }

//     // const colors = [ ' #d7aefb', '#a7ffeb', '#e8eaed', 
//     //     '#aecbfa', '#e6c9a8', '#fdcfe8', '#f28b82', '#aecbfa'];

//         console.log("Color", colors);
//     return(
//         <div>
//             <div><PaletteOutlinedIcon onClick={handleClick}></PaletteOutlinedIcon></div>
//             <Popper placement="top-start"  id={id} open={open} anchorEl={anchorEl}>
//             <div  className="">
//                 {open ? 
//                     <div className="color-popper">
//                         {colors.map((color) => {
//                             return (
//                                 <div className="colorsmall"onClick={(e)=>updateNote(e, color, props.Notes)}
//                                     style={{ backgroundColor: color }}>
                                
//                             </div>
//                             )
//                         })}
//                     </div>:null
//                 }
//              </div>
//              </Popper>
//             </div>
//     )
// }