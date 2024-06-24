

import React from 'react';
import useAuth from '../custom-hooks/useAuth';
import { Navigate } from 'react-router-dom'; //2.2k (gzipped: 1k)
import { Outlet } from 'react-router-dom';

const ProtectedRoute = () => {

    const {currentUser} = useAuth();

  return currentUser ? <Outlet /> : <Navigate to="/login"/>
};

export default ProtectedRoute;
