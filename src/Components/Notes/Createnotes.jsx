import React, { Component } from 'react';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import BrushIcon from '@material-ui/icons/Brush';
import './Createnotes.scss';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import PaletteOutlinedIcon from '@material-ui/icons/PaletteOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
// import pin from '../../assests/pin.svg';
// import user_services from '../../services/userService';

const styles = {
    underline: {
        "& .MuiInput-underline:before": {
            position: 'fixed'
        },
        "& .MuiInput-underline:after": {
            position: 'fixed'
        }
    },
    widthInp : {
        "& .MuiInput-underline:before": {
            position: 'fixed'
        },
        width : '500px'
    }
};

class Createnotes extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: true,
            title: "",
            note: "",
            responce: false
        }

    }
    handleClick=()=>{
        console.log("hello");
        this.setState({
            open: false
        })
    }
    handleClickClose=()=>{
        let userData={
        title: this.state.title,
        description: this.state.note
        };

    if(this.state.title !== "" && this.state.description !== ""){
        console.log("success");
        user_services.addNotes(userData).then((data) =>{
            console.log('data after added note',data);
            this.setState({
                open: true,
                title: "",
                note: "",
                responce: true
              },()=>{console.log(this.state);})
            this.props.get();
        })
        .catch(error=>{
            this.setState({
                open: true,
                title: "",
                note: "",
                responce: true
              },()=>{console.log(this.state);})
            console.log('Error',error);
        });
    }
    else{
        console.log("error");
        this.setState({
            open: true,
                title: "",
                note: "",
                responce: true
              },()=>{console.log(this.state);})
    }
}
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => { console.log(this.state); })
    }

    render() {
        const { classes } = this.props;
        return (
            <>
            {this.state.open ? (
                <div className="takenote" onClick={this.handleClick}>
                    <div className="input-feild"  >
                        <div className="inputText" type="text" >Take a Note...</div>
                            <div classname="imgIconClose">
                                <CheckBoxOutlinedIcon/>
                                <BrushIcon/>
                                <ImageOutlinedIcon/>
                            </div>
                    </div>
                </div>
        ):( 
                <div className="takenote takenote-open">
                    <div className="input-feild-open">
                        <div className="input-title-note">
                            <TextField 
                                id="standard-multiline-flexible" 
                                className={classes.underline,classes.widthInp}
                                label="Title" 
                                name="title"
                                multiline rowsMax={4} 
                                placeholder="Title"
                                onChange={this.handleInput} />
                            <img src={pin} className="pin-inp" alt="" />
                        </div>
                        <div className="input-title-note">
                            <TextField 
                                id="standard-multiline-flexible" 
                                className={classes.underline,classes.widthInp}
                                label="Take a note" 
                                name="note"
                                multiline rowsMax={4} 
                                placeholder="Note"
                                onChange={this.handleInput} />
                        </div>
                        <div className="icon-open">
                            <div className="icon-open-content">
                            <AddAlertOutlinedIcon/>
                            <PersonAddOutlinedIcon/>
                            <PaletteOutlinedIcon/>
                            <PaletteOutlinedIcon/>
                            <ImageOutlinedIcon/>
                            <ArchiveOutlinedIcon/>
                            <MoreVertOutlinedIcon/>
                            </div>
                            <div onClick={this.handleClickClose} className="icon-open-close">Close</div>

                        </div>
                    </div>
                </div>
         ) }
            </>
        );
    }
}

export default withStyles(styles)(Createnotes);