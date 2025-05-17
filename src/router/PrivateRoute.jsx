import React from 'react';
import useAuth from '../component/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user } = useAuth()
    const location = useLocation()
    console.log(location);

    if (user) return children

    return <Navigate to='/signIn' state={location?.pathname} />
};

export default PrivateRoute;