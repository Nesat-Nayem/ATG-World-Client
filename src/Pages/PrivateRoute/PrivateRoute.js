import React from 'react';
import './privateRoute.css'
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
  
    const { user, isLoading } = useAuth();
    let location = useLocation();
    if (isLoading) { return <p>wait...</p> }
    if (user.email) {
        return children;
    }
    // return <Navigate to="/job" state={{ from: location }} />;


    return <h3 className='errorMessage mt-3'><i class="fas fa-exclamation-triangle"></i> You Are Now Not Login, Only Login User Can Create Post</h3>

};

export default PrivateRoute;