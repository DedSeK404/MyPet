import React from 'react'
import {useSelector} from 'react-redux'
import {Navigate} from 'react-router-dom'
const PrivateRoute = ({children}) => {
    const isAuth=useSelector(state=>state.userR.isAuth)
    const authloading=useSelector(state=>state.userR.authloading)

   
  return !authloading? isAuth?children: <Navigate to="/login"/>:""

}

export default PrivateRoute