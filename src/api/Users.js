import {Component} from 'react'
import Api from './Api';
class Users extends Component{ 
 
    
    async register(form){ 
        return Api.post('regapi/reg', form)
    }
    async login(form){ 
        return Api.post('regapi/login', form)
    }
    
    async getusers(key){ 
        return Api.post('regapi/listdata', key)
    }
    async usersget(){ 
        return Api.get('regapi/usersList')
    }

    async updateusersdata(id, form){ 
        return Api.patch(`regapi/dataid/${id}`, form)
    }
   
   async getSingleUser(id){ 
        return Api.get(`regapi/getid/${id}`)
    }
    async deleteUser(id, form){ 
        return Api.put(`regapi/delete/${id}`, form)
    }
    
}
export default Users;