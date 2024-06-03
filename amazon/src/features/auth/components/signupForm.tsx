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
import {
  validateNameLength,
  validatePasswordLength,
} from "../../../shared/utils/validation/length";
import useInput from "../../../hooks/input/use-input";
import { validateEmail } from "../../../shared/utils/validation/email";
import { NewUser } from "../models/new-user";

// import { Container } from './styles';

const RegistrationFormComponent: React.FC = () => {
  const {
    text: name,
    shouldDisplayError: nameHasError,
    textChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    clearHandler: nameClearHandler,
  } = useInput(validateNameLength);

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

  const {
    text: confirmPassword,
    shouldDisplayError: confirmPasswordHasError,
    textChangeHandler: confirmPasswordChangeHandler,
    inputBlurHandler: confirmPasswordBlurHandler,
    clearHandler: confirmPasswordClearHandler,
  } = useInput(validatePasswordLength);

  const clearForm = () => {
    nameClearHandler();
    emailClearHandler();
    passwordClearHandler();
    confirmPasswordClearHandler();
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) return;

    if (
      nameHasError ||
      emailHasError ||
      passwordHasError ||
      confirmPasswordHasError
    )
      return;

    if (
      name?.length === 0 ||
      email?.length === 0 ||
      password?.length === 0 ||
      confirmPassword?.length === 0
    )
      return;

    const newUser: NewUser = {
      name,
      email,
      password,
    };

    console.log("NEW USER", newUser);

    clearForm();
    console.log("submit");
  };

  return (
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
            Create Account
          </Typography>

          <InputLabel
            sx={{ fontWeight: 500, marginTop: 1, color: "#000" }}
            htmlFor="name"
          >
            Your name
          </InputLabel>
          <TextField
            type="text"
            value={name}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            error={nameHasError}
            helperText={nameHasError ? "Enter your name" : ""}
            name="name"
            id="name"
            variant="outlined"
            size="small"
          />

          <InputLabel
            sx={{ fontWeight: 500, marginTop: 1, color: "#000" }}
            htmlFor="email"
          >
            Your email
          </InputLabel>
          <TextField
            type="email"
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
            type="password"
            name="password"
            id="password"
            variant="outlined"
            size="small"
            placeholder="Minimum 6 characters required"
            value={password}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            error={passwordHasError}
            helperText={passwordHasError ? "Minimum 6 characters required" : ""}
          />

          <InputLabel
            sx={{ fontWeight: 500, marginTop: 1, color: "#000" }}
            htmlFor="reenter-password"
          >
            Re-enter password
          </InputLabel>
          <TextField
            type="password"
            name="reenter-password"
            id="reenter-password"
            variant="outlined"
            size="small"
            value={confirmPassword}
            onChange={confirmPasswordChangeHandler}
            onBlur={confirmPasswordBlurHandler}
            error={confirmPassword.length > 0 && password !== confirmPassword}
            helperText={
              confirmPassword.length > 0 && password !== confirmPassword
                ? "Password must match"
                : ""
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
            Signup
          </Button>
        </Grid>
      </form>
      <div style={{ marginTop: "30px" }}>
        <small>
          <span>By creating an account, you agree to Amazon's</span>
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

      <Divider sx={{ marginTop: "16px", marginBottom: "16px" }} />

      <div>
        <small>
          Already have an account?{" "}
          <Link to="/sign" style={{ textDecoration: "none", color: "#0000ee" }}>
            Sign-in
          </Link>
        </small>
      </div>

      <div>
        <small>
          Buying for work?
          <a href="#" style={{ textDecoration: "none" }}>
            {" "}
            Create a free business account
          </a>
        </small>
      </div>
    </Box>
  );
};

export default RegistrationFormComponent;
