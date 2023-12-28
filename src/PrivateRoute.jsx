import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom'
import { getAuth } from "firebase/auth";


const PrivateRoutes = () => {
    const [Auth, setauth] = useState(false)
    const auth = getAuth();
    const user = auth.currentUser;
    useEffect(() => {   
      if (user !== null) {
       setauth(true);
      }
      
    }, []);
    return(
        auth ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes