import axios from 'axios'

const apiAdress = "http://localhost:5000/remember/"

export const rememberService ={
    getRemembers:()=>{
    return axios.get(apiAdress);
    
    },
    getRememberById:id =>{
return axios.get(apiAdress+id);
}

};