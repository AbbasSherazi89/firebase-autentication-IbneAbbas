import React from "react";
// import Box from '@mui/material/Box';
import { TextField} from "@mui/material";
import FormButton from "./FormButton";

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
                <div className="col-md-4 form-colmn1">
                  <img className="img-fluid" src="assets/signup.svg" alt="" />
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
