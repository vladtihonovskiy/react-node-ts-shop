import React from "react";
import { Button, Container, Grid, TextField } from "@mui/material";
import LoginForm from "./components/LoginForm/LoginForm";

const Login = () => (
  <Container sx={{ height: "100vh" }} maxWidth="sm">
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100%" }}
    >
      <LoginForm />
    </Grid>
  </Container>
);

export default Login;
