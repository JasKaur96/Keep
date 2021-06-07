import AxiosService from "./AxiosService";
import baseUrl from '../Constants/constants'
const axios = new AxiosService();

export default class NotesService{

    addNotes(data,token){
        console.log("Notes Service")
        console.log(data);
        console.log(baseUrl);
        return axios.postMethod(baseUrl+"/notes/addNotes",data, {
            headers: {'Authorization': token}
        });
    }

    getNotes(data,token){
        console.log("Get Notes Service")
        console.log(data);
        return axios.getMethod(baseUrl+"notes/getNotesList",data, {
            headers: {'Authorization': token}
        });
    }

    updateNotes = (data,token) => {
        return axios.postMethod(baseUrl+"/notes/updateNotes",data, {
            headers: {'Authorization': token}
        });
    }


}