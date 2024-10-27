import React, { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute: FC = () => {
  const token = localStorage.getItem("authToken");

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
