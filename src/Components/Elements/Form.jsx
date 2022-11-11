import React from "react";
// import Box from '@mui/material/Box';
import { TextField, Box } from "@mui/material";
import { Container } from "react-bootstrap";
import FormButton from "./FormButton";

const Form = ({ title, setEmail, setPassword, handleAction }) => {
  return (
    <>
      <section className="signin-sec">
        {/* // <Container style={{ maxwidth: "600px", margin: "8rem 16rem" }}> */}
        <div className="pt-5">
          <h2 className="text-center fw-bold">{title} Form</h2>
        </div>
        {/* <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "35ch" },
        }}
        noValidate
        autoComplete="off"
      > */}
        <div className="container">
          <div className="row form-row">
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

        {/* </Box> */}
        {/* </Container> */}
      </section>
    </>
  );
};

export default Form;
