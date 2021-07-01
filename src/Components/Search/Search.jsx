import { IconButton } from '@material-ui/core';
import React,{useState,useEffect} from 'react'
import SearchIcon from '@material-ui/icons/Search';
import MapData from '../MapData/MapData';
import Services from "../../Services/NotesServices";
import '../../Pages/Dashboard/Daashboard.css';
const service = new Services();
  
export default function Search(props) {
 
    const [searchTerm,setSearchTerm] = useState("")
    const [searchedNote,setSearchNote] = useState([])

    const handleChange = (e,value) => {        
        console.log("Search method",value)        
        setSearchTerm({searchTerm: value})
        props.handleSearchNote(value)      
        console.log("Search term in search method",searchTerm)
    }
 
    return (
        <div> 
            <div className="search">
                <IconButton color="inherit"  edge="start">    
                    <SearchIcon className="searchIcon" />
                </IconButton>
                <input onChange={e=>handleChange(e,e.target.value)}  type="text" placeholder="Search" />
              
            </div>
        </div>
    )
}
