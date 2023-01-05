import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


const ProtectedRoute = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const checkUserToken= () =>{
        const token=localStorage.getItem("Bearer");
        const admin =localStorage.getItem('Admin');
        if(!token&&admin==='superadmin'){
            setIsLoggedIn(false);
            return navigate("/")
        }
        
        else{
            setIsLoggedIn(true)
        }
    }

    useEffect(() => {
        checkUserToken();
    }, [isLoggedIn]);

  return isLoggedIn ? children : null
}

export default ProtectedRoute