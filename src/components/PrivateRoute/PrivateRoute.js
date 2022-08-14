import React, { useEffect } from 'react'
import useFirebase from '../../hooks/useFirebase'
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const PrivateRoute = () => {
  const { userData } = useFirebase();
  // let navigate = useNavigate();
console.log(userData, "Private route")


  return userData ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute