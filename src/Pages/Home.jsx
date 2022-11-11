import React from "react";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem("auth");
    if (authToken) {
      navigate("/");
    }
    if (!authToken) {
      navigate("/login");
    }
  }, [navigate]);

  const logout = () => {
    sessionStorage.removeItem("auth");
    navigate("/login");
  };
  return (
    <>
      <section className="home-sec">
        <div className="pt-5">
          <h2 className="text-center fw-bold">Home</h2>
        </div>
        <Button onClick={logout}>Logout</Button>
        <lord-icon
          src="https://cdn.lordicon.com/lupuorrc.json"
          trigger="hover"
          style={{width:'250px',height:'250px'}}
        ></lord-icon>
      </section>
    </>
  );
};

export default Home;
