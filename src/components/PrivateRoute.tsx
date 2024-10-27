import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { AppDispatch, RootState } from '../store';
import { setUserData } from '../store/auth/auth-slice';
import { getLoggedInUser } from '../store/auth/auth-extra-reducers';

const PrivateRoute: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const userData = useSelector((state: RootState) => state.auth);
  const token = localStorage.getItem("authToken");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (!userData?.userId && token && userId) {
      dispatch(setUserData({ token, userId }));
      dispatch(getLoggedInUser({userId, sysId: userId}));
    }
  }, [userData, token, userId, dispatch]);

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;