import AxiosService from "./AxiosService";
import baseUrl from '../Constants/constants'
const axios = new AxiosService();

export default class UserService{
    
    userRegister(data){
        console.log("User Service")
        return axios.postMethod(baseUrl+"user/userSignUp",data);
    }

    userLogin(data){
        console.log("User Login")
        return axios.postMethod(baseUrl+"user/login",data);      
    }
}