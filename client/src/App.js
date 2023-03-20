import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainLogin from "./Components/Login/Main_login/MainLogin";
import Footer from "./Components/Header_Footer/Footer/Footer";
import SignUp from "./Components/Login/Sign_up/SignUp";
import SignIn from "./Components/Login/Sign_in/SignIn";
import OwnerHome from "./Components/Home/Owner_home_page/OwnerHome";
import SitterHome from "./Components/Home/Sitter_home_page/SitterHome";
import AdminHome from "./Components/Home/Sitter_home_page/Admin_home_page/AdminHome";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import PrivateRoute from "./Components";
import { getUser } from "./JS/actions/useraction";
import NotFound from "./Components/Home/NotFound";





function App() {
  const [unavailable, setUnavailable] = useState("")
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getUser());
  }, []);
  const currentUser = useSelector((state) => state.userR.currentUser);
  return (
    <div className="App">
     
      <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<MainLogin />} />
        <Route path="/login/Signup" element={<SignUp />} />
        <Route path="/login/Signin" element={<SignIn />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              {currentUser?.role == "admin" ? (
                <AdminHome />
              ) : (
                <Navigate to="/login" />
              )}
            </PrivateRoute>
          }
        />
        <Route
          path="/sitter"
          element={
            <PrivateRoute>
              <SitterHome setUnavailable={setUnavailable} />
            </PrivateRoute>
          }
        />
        <Route
          path="/owner"
          element={
            <PrivateRoute>
              <OwnerHome />
            </PrivateRoute>
          }
        />
        <Route path='/404NotFound' element={<NotFound/>} />
        <Route path='*' element={<Navigate to='/404NotFound' />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
