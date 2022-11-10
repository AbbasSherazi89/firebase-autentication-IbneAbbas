import React from "react";
import { useEffect } from "react";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  useEffect
    (() => {
      let authToken = sessionStorage.getItem("auth");
      if (authToken) {
        navigate("/home");
      }
      if (!authToken) {
        navigate("/login");
      }
    });

  const logout=()=>{
    sessionStorage.removeItem("auth");
    navigate('/login');
  }
  return (
    <>
      <h1>Home</h1>
      <Button onClick={logout}>Logout</Button>
    </>
  );
};

export default Home;
