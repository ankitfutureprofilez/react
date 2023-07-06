import axios from 'axios';
let Api = axios.create({  
    baseURL: "http://localhost:5000/" ,
    headers : {
        'Accept' : 'application/json',
    }
});
export default Api;
