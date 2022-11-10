import React from "react";
// import Box from '@mui/material/Box';
import { TextField, Box } from "@mui/material";
import { Container } from "react-bootstrap";
import FormButton from "./FormButton";

const Form = ({ title, setEmail, setPassword, handleAction }) => {
  return (
    <Container style={{ maxwidth: "600px", margin: "8rem 16rem" }}>
      <div>
        <h2>{title} Form</h2>
      </div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <FormButton title={title} handleAction={handleAction} />
      </Box>
    </Container>
  );
};

export default Form;
