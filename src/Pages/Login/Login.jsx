import {Component} from 'react';
import './login.css'
import TextField from '@material-ui/core/TextField';
import {Button, Slide, Snackbar} from '@material-ui/core'
import GoogleHeader from '../../Components/Google-Header/GoogleHeader';
import {Link} from 'react-router-dom';
import userService from '../../Services/UserServices'

const service = new userService();

export default class Login extends Component {
    constructor(probs){
        super(probs);
        this.state ={
            username:"",
            password:"",
            usernameError:false,
            usernameMsg:"",
            passwordError:false, 
            passwordErrorMsg:"",
            showpassword:true,
            show: false,          
            snackmsg: ""
        }        
    }
    
   handlechange =(e)=>{
       let name = e.target.name;
       let value = e.target.value;
       this.setState({ [name]: value })
   }
   validationCheck = () => {
       this.setState({
           usernameError: false,
           usernameErrorMsg: '',
           passwordError: false,
           passwordErrorMsg: '',
       })
       var valid = true;

       let reg_patt = "^[0-9a-zA-Z]+([.\\-_+][0-9a-zA-Z]+)*@[a-z0-9A-Z]+.[a-z]{2,4}([.][a-zA-Z]{2,})*$";
       let pattern = new RegExp(reg_patt);
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

       if (this.state.password.length < 8) {
           this.setState({ passwordError: true })
           this.setState({ passwordErrorMsg: "password should be atleast 8 characters" })
           valid = false;
       }

       if (this.state.password.length == 0) {
           this.setState({ passwordError: true })
           this.setState({ passwordErrorMsg: "Enter a password" })
           valid = false;
       }

       return valid;

   }
   handleClick = (e) => {
       this.setState({ showpassword: !this.state.showpassword })

   }
   submit =()=>{ 
      
       if(this.validationCheck()){
           this.setState({ show: true })
           let data={
                "email": this.state.username,
                "password": this.state.password,
                "service" : "advance"
           }
           service.userLogin(data).then((result) => {
                localStorage.setItem('Token', result.data.id);
                localStorage.setItem('FirstName', result.data.firstName);
                localStorage.setItem('LastName',result.data.lastName);
                localStorage.setItem('userDetails', JSON.stringify(result.data))
               
                this.setState({ snackmsg: "login successfull" })
                this.props.history.push('/dashboard');
            }).catch((error) => {
                console.log(error);
                this.setState({ snackmsg: "login error" })
             })
        }
        else{
            this.setState({ show: true }) 
            this.setState({ snackmsg: "Please Enter Valid details" })
        }
    
}

handleClose = (reason) =>{
    if(reason === 'clickaway'){
        return;
    }
    this.setState({ show:false});
}


    render() {
        return (
            <>
                <div className="login-main">
                    <div className="login-body">
                        <div className="topcontent">
                            <GoogleHeader/>
                            <p className="signin-font"> Sign in</p>
                            <div>  Use your Google Account </div>
                            <div className="textfields">
                                <TextField id="outlined-basic" error={this.state.usernameError} helperText={this.state.usernameErrorMsg} className="text-width"
                                 variant="outlined" name="username" label="Email or phone " size="small" onChange={this.handlechange} margin="dense" />
                                <TextField id="outlined-basic" type={this.state.showpassword ? "password" : "type"}  error={this.state.passwordError} 
                                helperText={this.state.passwordErrorMsg} variant="outlined" className="text-width" name="password" label="Password" size="small" 
                                margin="dense" onChange={this.handlechange}/>
                                <div className="pswd">
                                    <input type="checkbox" id="radio" onClick={this.handleClick} value="Show password"/>
                                    <label htmlFor="radio"> Show password</label>
                                </div>
                            </div>

                        </div>
                        <div className="notComp">Not your computer? Use Guest mode to sign in privately.<br></br><a className="link" href="https://support.google.com/chrome/answer/6130773?hl=en-GB" >Learn more</a></div>
                            <div className="forget">Forget password?</div>
                           
                           {/* <div className="inline__button">
                            <Link to="/">Create Account</Link>
                            <Button variant="outlined" size="small" onClick={this.submit}>Sign in</Button>
                           
                            </div> */}

                            <div className="inline__button">
                                    <Link to="/">Create Account</Link>
                                    <Button variant="outlined" onClick={this.submit} >Next</Button>
                                    {/* <Snackbar
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'left',
                                        }}
                                        TransitionComponent={Slide}
                                        open={this.state.show}
                                        autoHideDuration={1000}
                                        onClose={this.handleClose}
                                        message={this.state.snackmsg}
                                    /> */}
                                </div>
                    </div>
                    
                </div>
            </>
        )
    }
}