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

    async products(key){ 
        return Api.post('regapi/product', key)
    }

    async productshow(){ 
        return Api.get('regapi/product')
    }
    async productdelte(id){ 
        return Api.delete(`regapi/product/${id}`)
    }
    
    async productupdate(id, form){ 
        return Api.patch(`regapi/Product/${id}`, form)
    }

      
    async productid(id){ 
        return Api.get(`regapi/Products/${id}`)
    }
    
}
export default Users;