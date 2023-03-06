import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainLogin from "./Components/Login/Main_login/MainLogin";
import Footer from "./Components/Header_Footer/Footer/Footer";
import SignUp from "./Components/Login/Sign_up/SignUp";
import SignIn from "./Components/Login/Sign_in/SignIn";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLogin />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Signin" element={<SignIn />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
