import React from "react";
import { Button, Grid, TextField } from "@mui/material";
import { useLoginForm } from "./useLoginForm";
import FormErrorMessage from "../../../../components/FormErrorMessage/FormErrorMessage";

export const LoginForm: React.FC = () => {
  const { registerEmail, registerPassword, errors, onSubmit, requestError } =
    useLoginForm();

  return (
    <form style={{ width: "100%" }} onSubmit={onSubmit}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <TextField
          {...registerEmail}
          error={!!errors.email}
          sx={{ width: "100%", marginBottom: 5 }}
          label="Email"
          type="Email"
        />
        <FormErrorMessage text={errors.email?.message as unknown as string} />
        <TextField
          {...registerPassword}
          error={!!errors.password}
          sx={{ width: "100%" }}
          label="Password"
          type="Password"
        />
        <FormErrorMessage
          text={errors.password?.message as unknown as string}
        />
        <FormErrorMessage text={requestError} />
        <Button sx={{ marginTop: 2 }} type="submit">
          Login
        </Button>
      </Grid>
    </form>
  );
};

export default LoginForm;
