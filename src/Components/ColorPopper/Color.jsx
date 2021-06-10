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

    const colors = ["#fafafa" ,"#ef9a9a" , "#ffcc80" ,"#fff59d" ,"#dcedc8" ,"#b2dfdb" , "#e0f7fa" ,"#4fc3f7" ,
                    "#b39ddb" ,"#f8bbd0" ,"#a1887f" ,"#cfd8dc" ,
                    ];

    const handleClick = (event) => {
        setOpen(!open)
        setanchorEl(event.currentTarget)
    }

    const id = open ? 'simple-popper' : undefined;  

    const updateNote = (e, color, value) => {
        let token = localStorage.getItem("Token")
        let data = {
            // noteId: [value.noteId],
            color: color,
        }
        // console.log("Color: ",data);
        service.colorChange(data, token).then((result)=> {
            // console.log(data);
            // console.log(result);
            window.location.reload();
        })
        .catch((error) => {
            console.log(error);
        })
    }
  
    // console.log("Color here: ",colors);
    return (
        <div>
            <IconButton  className="icon-place" color="inherit"  edge="start"><PaletteOutlinedIcon  className="icon-place" aria-describedby={id} type="button" onClick={handleClick} style={{cursor:"pointer", width:"18px"}}/>
            </IconButton>
            <Popper  placement="top-start" id={id} open={open} anchorEl={anchorEl}>
                <div>
                    {open?<div className="colorbox" >
                            {colors.map((value,index) => {
                                    return (
                                        <>
                                            <div key={index} className="colorsmall" onClick={(e)=>updateNote(e, value, props.notes)} style={{backgroundColor:value}} ></div>
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


