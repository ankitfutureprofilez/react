import  { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function PrivateRoute({ children }) {
   const navigate = useNavigate()
    useEffect(()=>{ 
        const auth  = localStorage.getItem("auth");
        if(!auth){   
            navigate('/login');
        }
    });
  return children 
}
