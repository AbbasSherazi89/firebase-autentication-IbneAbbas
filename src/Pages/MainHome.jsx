import React from "react";
import { Link } from "react-router-dom";
const MainHome = () => {
  return (
    <>
      <section className="home-sec">
        <div className="pt-5">
          <h2 className="text-center fw-bold">Home Page</h2>
        </div>
        <p className="text-start">
          <Link className="text-decoration-none" to="/register">
            Register
          </Link>
        </p>
        <p className="text-start">
          <Link className="text-decoration-none" to="/login">
           Login
          </Link>
        </p>
      </section>
    </>
  );
};

export default MainHome;
