import React, { Component } from 'react'
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import { StylesProvider } from "@material-ui/core/styles";
// import './icon.css';
import Reminder from '../RemindPopper/Reminder';
import Color from '../ColorPopper/Color';
import Archive from '../ArchivePopper/ArchivePopper';
import Services from "../../Services/NotesServices"
import MenuPopper from '../MenuPopper/MenuPopper';
const service = new Services();


export default class Icon extends Component {
    constructor(){
        super()
        this.state={
            anchorEl:null,
            show:false
        }
    }
    handleClick = (event) =>{
        this.setState({
            anchorEl:event.currentTarget
        })
    }
    handleClose= () => {
        this.setState({
            anchorEl:null
        })
    }
    changeingShow=()=>{
        this.setState({
            show:!this.state.show
        })
    }
    archieveNote=(val)=>{
        let data={
            noteIdList: [this.props.Notes.id],
            isArchived:true
        }
        service.archiveNote(data).then((data)=>{
            console.log("data",data)
        }).catch((error)=>{
            console.log("error",error)
        })
    }
    // deleteNote=()=>{
    //     let data ={
    //         isDeleted:true,
    //         noteIdList: [this.props.Notes.id]
    //     }
    //     new UserService().deleteNote(data).then((data)=>{
    //         this.props.getNote()
    //         console.log(data)
    //         this.handleClose();
    //     }).catch((error)=>{
    //         console.log(error)
    //     })
    // }
    onSetColor=(color)=>{
        let Data ={
            noteIdList:[this.props.notes.noteId],
            color:color
        }
        service.changeColor(Data).then((data) =>{
            console.log('color of note',data);
            this.props.getNote();
        }).catch(error=>{
            console.log("color error",error);
        })
        console.log("Color",Data)
    }
    render() {
        console.log(this.props.notes)
        return (
            <StylesProvider injectFirst>
                <div className="note-icons">
                    <div className="note-icon-hover">
                        <Reminder className="icon-size" />
                    </div>
                    <div className="note-icon-hover">
                        <PersonAddOutlinedIcon className="icon-size" />
                    </div>
                    <div className="note-icon-hover">
                        <Color putColor={(Data) => {
                            this.onSetColor(Data)}}
                        />
                    </div>
                    <div className="note-icon-hover">
                        <Archive onClick={()=>this.archieveNote(this.props.notes)}/>
                    </div>
                    <div>
                        <div className="note-icon-hover">
                            <MenuPopper getNote={this.props.getNote}/>
                        </div>
                       
                       
                    </div>
                </div>
            </StylesProvider>
        )
    }
}
