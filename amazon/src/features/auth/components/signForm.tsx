import {
  Box,
  Grid,
  Typography,
  TextField,
  InputLabel,
  Button,
  Divider,
} from "@mui/material";
import React, { FormEvent } from "react";
import { Link } from "react-router-dom";
import useInput from "../../../hooks/input/use-input";
import { validatePasswordLength } from "../../../shared/utils/validation/length";
import { validateEmail } from "../../../shared/utils/validation/email";

const SignFormComponent: React.FC = () => {
  const {
    text: email,
    shouldDisplayError: emailHasError,
    textChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    clearHandler: emailClearHandler,
  } = useInput(validateEmail);

  const {
    text: password,
    shouldDisplayError: passwordHasError,
    textChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    clearHandler: passwordClearHandler,
  } = useInput(validatePasswordLength);

  const clearForm = () => {
    emailClearHandler();
    passwordClearHandler();
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (emailHasError || passwordHasError) return;

    if (email?.length === 0 || password?.length === 0) return;

    clearForm();
    console.log("submit");
  };

  return (
    <>
      <Box
        sx={{
          border: 1,
          padding: 2,
          borderColor: "#cccccc",
          width: "350px",
          marginTop: 2,
        }}
      >
        <form onSubmit={handleSubmit}>
          <Grid container direction={"column"} justifyContent={"flex-start"}>
            <Typography variant="h4" component="h1">
              Sign in
            </Typography>

            <InputLabel
              sx={{ fontWeight: 500, marginTop: 1, color: "#000" }}
              htmlFor="email"
            >
              Your email
            </InputLabel>
            <TextField
              type="text"
              name="email"
              id="email"
              variant="outlined"
              size="small"
              value={email}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              error={emailHasError}
              helperText={emailHasError ? "Enter your email" : ""}
            />

            <InputLabel
              sx={{ fontWeight: 500, marginTop: 1, color: "#000" }}
              htmlFor="password"
            >
              Your password
            </InputLabel>
            <TextField
              type="text"
              name="password"
              id="password"
              variant="outlined"
              size="small"
              placeholder="Minimum 6 characters required"
              value={password}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              error={passwordHasError}
              helperText={
                passwordHasError ? "Minimum 6 characters required" : ""
              }
            />

            <Button
              variant={"contained"}
              style={{
                marginTop: "16px",
                height: "31px",
                backgroundColor: "#f0c14b",
                color: "black",
                borderColor: "#a88734 #9c7e31 #846a29",
                textTransform: "none",
              }}
              type={"submit"}
            >
              Sign-in
            </Button>
          </Grid>
        </form>
        <div style={{ marginTop: "30px" }}>
          <small>
            <span>By continuing, you agree to Amazon's</span>
          </small>
        </div>

        <div>
          <small>
            <a href="#" style={{ textDecoration: "none" }}>
              {" "}
              Conditions of use
            </a>{" "}
            and{" "}
            <a href={"#"} style={{ textDecoration: "none" }}>
              Privacy Police
            </a>
          </small>
        </div>
      </Box>
      <div style={{ marginTop: "16px" }}>
        <Divider>
          <small style={{ color: "#767676" }}>New to Amazon?</small>
        </Divider>
        <Link to="/signup" style={{ textDecoration: "none", color: "#0000ee" }}>
          <Button
            variant={"contained"}
            style={{
              width: "100%",
              marginTop: "16px",
              height: "31px",
              backgroundColor: "#f1f1f1",
              color: "black",
              textTransform: "none",
            }}
          >
            Sign-up
          </Button>
        </Link>
      </div>
    </>
  );
};

export default SignFormComponent;
