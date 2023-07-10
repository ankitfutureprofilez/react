import  { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function PrivateRoute({ children }) {
   const navigate = useNavigate()
    useEffect(()=>{ 
        const auth  = localStorage.getItem("loginname");
        const token=localStorage.getItem("token")
        if(!auth ||  !token){   
        navigate('/login')
        }
     
    });
  return children 
}
