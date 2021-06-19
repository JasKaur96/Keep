import React from 'react'
import "../../Components/DisplayNote/Display.css";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';
import Card from '../Card/Card';
import "../GetNotes/GetNotes.css"

export default function MapData(props) {
    return (
        <div className="display-note">
            {props.note.reverse().map((value)=>{
                var style = {backgroundColor : value.color} 
                console.log("value Color",value)
                return(
                    <Card value={value} style={style}/>             
                )}                   
            )}
      </div>
    )
}
