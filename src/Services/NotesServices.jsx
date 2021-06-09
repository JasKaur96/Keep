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

    getNotes(token){
        console.log("Get Notes Service")
        // console.log(data);
        return axios.getMethod(baseUrl+"notes/getNotesList", {
            headers: {'Authorization': token}
        });
    }

    updateNotes(data,token){
        console.log("Get UpdateNotes Service")
        // console.log(data);
        return axios.postMethod(baseUrl+"notes/updateNotes",data, {
            headers: {'Authorization': token}
        });
    }
    
    colorChange = (data, token) => {
        return axios.postMethod(baseUrl+"notes/changesColorNotes", data, {
            headers: {'Authorization':token}
        })
    }

    archiveNote = (data, token) => {
        return axios.postMethod(baseUrl+"notes/archiveNotes", data, {
            headers:{
                'Authorization':token,
            }
        })
    }
    
    // getArchiveNote = (token) => {
    //     return axios.getMethod(`${this.baseUrl}notes/getArchiveNotesList`, {
    //         headers: {'Authorization': token}
    //     })
    // }

   

    
}
