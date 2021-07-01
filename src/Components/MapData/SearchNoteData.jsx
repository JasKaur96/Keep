import React from 'react'
import "../../Components/DisplayNote/Display.css";
import Card from '../Card/Card';
import "../GetNotes/GetNotes.css"

export default function SearchNoteData(props) {

    // console.log("MapData in search",props.note)
    return (
        <div className="notess" >
            <Card gridView={props.gridView} value={props.note} />
        </div> 
    )
}
