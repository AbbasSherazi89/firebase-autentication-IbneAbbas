import "./App.scss";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Form from "./Components/Elements/Form";
import {app} from "./firebase"
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'
import Home from "./Pages/Home";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate =useNavigate();

  const handleAction = (id) => {
    console.log(id);
    const authentication = getAuth();
    if(id===2){
      createUserWithEmailAndPassword(authentication,email, password).then(
        (res)=>{
        // console.log(res);
        navigate("/");
        sessionStorage.setItem('auth', res._tokenResponse.RefreshToken)
      }).catch(e=>{
        if(e.code === 'auth/wrong-password'){
          toast.error('Check the password')
        }
        if(e.code === 'auth/invalid-email'){
          toast.error('Check the email')
        }
      })   
    }
    if(id===1){
      signInWithEmailAndPassword(authentication,email, password).then(
        (res)=>{
        // console.log(res);
        navigate("/");
        sessionStorage.setItem('auth', res._tokenResponse.RefreshToken)
      }).catch(e=>{
        if(e.code === 'auth/wrong-password'){
          toast.error('Check the password')
        }
        if(e.code === 'auth/user-not-found'){
          toast.error('Check the email')
        }
      })
    }
  };
  return (
    <>
     
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route
            path="/login"
            element={
              <Form
                handleAction={() => handleAction(1)}
                setEmail={setEmail}
                setPassword={setPassword}
                title="Login"
              />
            }
          />
          <Route
            path="/register"
            element={
              <Form
                handleAction={() => handleAction(2)}
                setEmail={setEmail}
                setPassword={setPassword}
                title="Register"
              />
            }
          />
          
        </Routes>
        <ToastContainer />
    </>
  );
}

export default App;
