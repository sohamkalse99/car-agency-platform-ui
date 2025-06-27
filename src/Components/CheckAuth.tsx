import React, { useEffect, useState, type ReactNode } from 'react'
import { useNavigate } from 'react-router-dom';

interface CheckAuthProps {
    protectedRoute : boolean;
    children : ReactNode;
}

function CheckAuth({protectedRoute, children} : CheckAuthProps) {
    
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(()=>{
        if(!protectedRoute) {
            setLoading(false);
        } else {
            navigate('/');
        }
    }, [protectedRoute])
    return (
    <div>{children}</div>
  )
}

export default CheckAuth