import { Component } from "react";
import './Registeration.css'
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import GoogleHeader from "../../Components/Google-Header/GoogleHeader";

const Registeration = () =>{
   
        return(
            <div className="registration">
                <div className="signupPage">
                    <GoogleHeader/>
                    <div className="headerText">Create your Fundoo Account </div>
                </div>
                <div className="container">
                    
                </div>
            </div>
        )
}

export default Registeration