import React from 'react'
import "../../Components/DisplayNote/Display.css";
import Card from '../Card/Card';
import "../GetNotes/GetNotes.css"

export default function MapData(props) {
    // console.log("MapDAta", props.note)
    return (
        <div className="notess" >
            {props.note.filter((data) => data.isPined === true).reverse().map((value)=>{
                var style = {backgroundColor : value.color} 
                {/* console.log("value Color",value) */}
                return(<>
                    {/* <h4>Pinned</h4> */}
                    <Card gridView={props.gridView} value={value} getDeletedNote={props.getDeletedNote} getNote={props.callGetNote} getArchivedNote={props.getArchivedNote} style={style}/></>
                )}                    
            )}
  
            {props.note.filter((data) => data.isPined === false).reverse().map((value)=>{
                var style = {backgroundColor : value.color} 
                {/* console.log("value Color",value) */}
                return(<>
                    {/* <h4>Others</h4> */}
                    <Card gridView={props.gridView} value={value} getDeletedNote={props.getDeletedNote} getNote={props.callGetNote} getArchivedNote={props.getArchivedNote} style={style}/>  </>           
                )}                    
            )}
      </div> 
    )
}
