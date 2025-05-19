import React from 'react';
import useAuth from '../component/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()

    if (loading) return <span className='loading loading-ring loading-xl'></span>

    if (user) return children

    return <Navigate to='/signIn' state={location?.pathname} />
};

export default PrivateRoute;