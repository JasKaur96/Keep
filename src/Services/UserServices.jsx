import AxiosService from "./AxiosService";

const axios = new AxiosService();

export default class UserService{

    url = "http://fundoonotes.incubation.bridgelabz.com/api/";

    userRegister(data){
        console.log("User Service")
        return axios.postMethod(this.url+"user/userSignUp",data);
    }

    userLogin(data){
        console.log("User Login")
        return axios.postMethod(this.url+"user/login",data);      
    }
}