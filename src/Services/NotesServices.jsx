import AxiosService from "./AxiosService";
import baseUrl from '../Constants/constants'
const axios = new AxiosService();

export default class NotesService{

    addNotes(data,token){
        // console.log("Notes Service")
        // console.log(data);
        // console.log(baseUrl);
        return axios.postMethod(baseUrl+"/notes/addNotes",data, {
            headers: {'Authorization': token}
        });
    }

    getNotes(token){
        // console.log("Get Notes Service")
        // console.log(data);
        return axios.getMethod(baseUrl+"notes/getNotesList", {
            headers: {'Authorization': token}
        });
    }

    updateNotes(data,token){
        console.log("UpdateNotes Service")
        // console.log(data);
        return axios.postMethod(baseUrl+"notes/updateNotes",data, {
            headers: {'Authorization': token,
            'Content-Type': "multipart/form-data"
        }
        });
    }
    
    
    colorChange(data, token){
        console.log("Colorchange Service",data)
        return axios.postMethod(baseUrl+"notes/changesColorNotes", data, {
            headers: {'Authorization':token}
        })
    }

    deleteNote = (data, token) => {
     
        return axios.postMethod(baseUrl+"notes/trashNotes", data, {
            headers: {
                'Authorization':token,
            }
        }) 
    }

    getDeleteNote = (token) => {
        return axios.getMethod(baseUrl+"notes/getTrashNotesList", {
            headers: {
                'Authorization':token,
            }
        })
    }

    deleteForever = (data, token) => {
        console.log("Deleted forever")
        return axios.postMethod(baseUrl+"notes/deleteForeverNotes", data, {
            headers: {
                'Authorization':token,
            }
        })
    }
   

    archiveNote(data, token){
        console.log("Archived Service.",data)
        return axios.postMethod(baseUrl+"notes/archiveNotes", data, {
            headers:{
                'Authorization':token,
            }
        })
    }

    getArchiveNote(token){
        console.log("Archived Service.")
        return axios.getMethod(baseUrl+"notes/getArchiveNotesList", {
            headers:{
                'Authorization':token,
            }
        })
    } 

    getReminderNote(token){
        console.log("Reminder Service.")
        return axios.getMethod(baseUrl+"notes/getReminderNotesList", {
            headers:{
                'Authorization':token,
            }
        })
    } 

    addReminderNote(data,token){
        console.log("Reminder Service.")
        return axios.postMethod(baseUrl+"notes/addUpdateReminderNotes",data, {
            headers:{
                'Authorization':token,
              
            }
        }) 
    } 

    removeReminder = (data, token) => {
        return axios.postMethod(baseUrl+"notes/removeReminderNotes", data, {
            headers: {
                'Authorization':token,
            }
        })
    }

    pinNote = (data,token) => {
        console.log("Pin Service.")
        return axios.postMethod(baseUrl+"notes/pinUnpinNotes",data,{
            headers:{
                'Authorization':token,
            }
        })
    }
    
}
