
import axios from 'axios';
import { api } from './serviceHelper'

export const fetchUserData = async(id: number) => {
    api.get("/user/" + id).then((response) => {
        console.log(response.data)
    })
}
export const fetchALpha = async(id: number) => {
    return await api.get('/alpha/' + id).then((response) => response.data)
    
}