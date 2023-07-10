import axios from 'axios';


const tokens=  localStorage.getItem("token");



let Api = axios.create({  
    baseURL: "http://localhost:5000/" ,
    headers : {
    'Accept' : 'application/json',
    "Authorization":`Bearer ${tokens}`
    }
});
export default Api;
