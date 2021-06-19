import {Component } from 'react';
import './Registeration.css'
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
import {Button, Slide, Snackbar} from '@material-ui/core';
import GoogleHeader from '../../Components/Google-Header/GoogleHeader'
import userService from '../../Services/UserServices'

const service = new userService();

export default class Registration extends Component {

    constructor(probs) {
        super(probs)
        this.state = {
            firstname: "",
            lastname: "",
            username: "",
            password: "",
            confirmpassword: "",
            firstnameError: "",
            lastnameError: "",
            usernameError: "",
            passwordError: "",
            confirmpasswordError: "",
            firstnameErrorMsg: "",
            lastnameErrorMsg: "",
            usernameErrorMsg: "you can use numbers,letters and periods",
            passwordErrorMsg: "",
            confirmpasswordErrorMsg: "",
            showpassword: true,
            show: false,
            snackmsg:""
        };
    }

    handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({ [name]: value })
    }

    handleClick = (e) => {
        this.setState({ showpassword: !this.state.showpassword })

    }
  

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({ show: false })
    }

    validationCheck = () => {
        this.setState({
            firstnameError: false,
            firstnameErrorMsg: '',
            lastnameError: false,
            lastnameErrorMsg: '',
            usernameError: false,
            usernameErrorMsg: '',
            passwordError: false,
            passwordErrorMsg: '',
            confirmpasswordError: false,
            confirmpasswordErrorMsg: ''
        })
        var valid = true;
        let fname = "[A-Z]{1}[a-z]*";
        let fnamePattern = new RegExp(fname);

        if (!fnamePattern.test(this.state.firstname)) {
            this.setState({ firstnameError: true })
            this.setState({ firstnameErrorMsg: "Invalid firstname" })
            valid = false;
        }

        if (this.state.firstname.length == 0) {
            this.setState({ firstnameError: true })
            this.setState({ firstnameErrorMsg: "Enter firstname " })
            valid = false;
        }

        let lname = "^[A-Z]{1}[a-z]*";
        let lnamePattern = new RegExp(lname);

        if (!lnamePattern.test(this.state.firstname)) {
            this.setState({ lastnameError: true })
            this.setState({ lastnameErrorMsg: "Invalid lastname" })
            valid = false;
        }

        if (this.state.firstname.length == 0 && this.state.lastname.length == 0) {
            this.setState({ firstnameError: true })
            this.setState({ lastnameError: true })
            this.setState({ firstnameErrorMsg: "Enter firstname, lastname" })
            valid = false;
        }


        let userPattern = "^[a-zA-Z0-9_.]+@[a-zA-Z.a-zA-Z{2,}.a-zA-Z{2,}]+$";
        let pattern = new RegExp(userPattern);
        if (!pattern.test(this.state.username)) {
            this.setState({ usernameError: true })
            this.setState({ usernameErrorMsg: "Invalid Gmail address" })
            valid = false;
        }
        if (this.state.username.length == 0) {
            this.setState({ usernameError: true })
            this.setState({ usernameErrorMsg: "Choose Gmail address" })
            valid = false;
        }

        if (this.state.password.length != 0 && this.state.password != this.state.confirmpassword) {
            this.setState({ passwordError: true })
            this.setState({ passwordErrorMsg: "Password didn't match" })
            valid = false;
        }
        if (this.state.password.length < 8) {
            this.setState({ passwordError: true })
            this.setState({ passwordErrorMsg: "Password should be atleast 8 characters" })
            valid = false;
        }

        if (this.state.password.length == 0) {
            this.setState({ passwordError: true })
            this.setState({ passwordErrorMsg: "Enter a password" })
            valid = false;
        }

        return valid;

    }
    submit = () => {

        if (this.validationCheck()) {
           this.setState({ show: true })

        let data = {
            "firstName": this.state.firstname,
            "lastName": this.state.lastname,
            "email": this.state.username,
            "password": this.state.password,
            "service": "advance"
        }
        service.userRegister(data).then((result) => {
            console.log(result);
            this.setState({ snackmsg: "Registration succeccfull" })
          
            this.props.history.push('/login');
        })
        .catch((e)=>{console.log(e);
            this.setState({ snackmsg: "Registration error" })
          });

        }else{
            
            this.setState({snackmsg: "Please Enter valid data."});
        } 

    }
    render(){
        return ( 
            <>
            <div className="register-main">
                <div className="register-body">
                    <div className="innerbody">
                        <div className="form">
                            <GoogleHeader/>
                            <div className="create">Create your Google Account</div>
                            <div className="inputs">
                                <div className="inline">
                                    <TextField id="outlined-basic" className="firstName" variant="outlined" name="firstname" label="First name" onChange={this.handleChange}
                                    error={this.state.firstnameError} size="small" margin="dense" helperText={this.state.firstnameErrorMsg}/>

                                    <TextField id="outlined-basic" className="firstName space" variant="outlined" name="lastname" onChange={this.handleChange}
                                    error={this.state.lastnameError} label="Last name" size="small" margin="dense" helperText={this.state.lastnameErrorMsg}/>
                                </div>
                                <div>
                                    <TextField id="outlined-basic" variant="outlined" name="username" fullWidth label="Username" onChange={this.handleChange}
                                        error={this.state.usernameError} size="small" margin="dense" helperText={this.state.usernameErrorMsg}/>  <br />
                                </div>
                                <a href="#">Use my current email address instead </a>
                                <div className="inline">
                                    <TextField id="outlined-basic" className="firstName" type={this.state.showpassword ? "password" : "type"} variant="outlined" name="password" label="Password"
                                     size="small" margin="dense" onChange={this.handleChange}
                                        error={this.state.passwordError} helperText={this.state.passwordErrorMsg}/>

                                    <TextField id="outlined-basic" className="firstName space" type={this.state.showpassword ? "password" : "type"} variant="outlined" onChange={this.handleChange} 
                                    error={this.state.confirmpasswordError} name="confirmpassword" label="Confirm Password" size="small" margin="dense" helperText={this.state.confirmpasswordErrorMsg}/>
                                </div>
                                <span>Use 8 or more characters with a mix of letters, numbers & symbols</span>
                                <div>
                                    <input type="checkbox" id="radio" onClick={this.handleClick} value="Show password" />
                                    <label htmlFor="radio"> Show password</label>
                                </div>
                                <div className="inline__buttons">
                                    <Link to="/login">Sign in instead</Link>
                                    <Button variant="outlined" onClick={this.submit} size="small">Submit</Button>
                                    <Snackbar
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'left',
                                        }}
                                        TransitionComponent={Slide}
                                        open={this.state.show}
                                        autoHideDuration={1000}
                                        onClose={this.handleClose}
                                        message={this.state.snackmsg}
                                    />
                                </div>
                            </div>                         
                        </div>
                        <div className="image">
                            <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt="" width="244" height="244"/>
                            <p className="para">One account. All of Google<br></br> working for you.</p>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}













































