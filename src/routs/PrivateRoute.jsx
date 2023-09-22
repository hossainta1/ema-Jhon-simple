import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../components/Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const location = useLocation();
    console.log(location);

    const { user, lodding } = useContext(AuthContext);
    if (lodding) {
        return <div>Lodding......</div>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location }} replace></Navigate>;
};

export default PrivateRoute;