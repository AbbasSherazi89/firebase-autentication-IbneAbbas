import React from "react";
import { TextField } from "@mui/material";
import FormButton from "./FormButton";
import { Link } from "react-router-dom";
const Form = ({ title, setEmail, setPassword, handleAction }) => {
  return (
    <>
      <section className="signin-sec">
        <div className="container">
          <div className="row form-row">
            <div className="col-md-7 form-colmn">
              <div className="row form-row2">
                <div className="pt-4">
                  <h2 className="text-center fw-bold"> {title} Form</h2>
                </div>
                <div className="col-md-5 form-colmn1">
                  <img className="img-fluid" src="assets/form-pic.webp" alt="" />
                </div>
                <div className="col-md-6 form-colmn2 py-5">
                  <TextField
                    className="mt-3"
                    id="email"
                    label="Email"
                    type="email"
                    variant="outlined"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <br />
                  <TextField
                    className="my-3"
                    id="password"
                    label="Password"
                    type="password"
                    variant="outlined"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <br />
                  <FormButton title={title} handleAction={handleAction} />
                  <br />
                  <p className="text-start">
                    <Link className="text-decoration-none" to="/forgot">
                      Forgot Password?
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
