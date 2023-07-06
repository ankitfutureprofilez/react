import {Component} from 'react'
import Api from './Api';
class Users extends Component{ 
 
    constructor(props){ 
        super(props);
    }
    async register(form){ 
        return Api.post('regapi/reg', form)
    }
    async login(form){ 
        return Api.post('regapi/login', form)
    }
    
    async getusers(form){ 
        return Api.get('regapi/listdata', form)
    }

   
   async updateusers(id, form){ 
        return Api.get(`regapi/getid/${id}`, form)
    }
    async deleteUser(id, form){ 
        return Api.delete(`regapi/delete/${id}`, form)
    }
    
}
export default Users;