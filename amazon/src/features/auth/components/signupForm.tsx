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

// import { Container } from './styles';

const RegistrationFormComponent: React.FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
            type="text"
            name="email"
            id="email"
            variant="outlined"
            size="small"
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
          />

          <InputLabel
            sx={{ fontWeight: 500, marginTop: 1, color: "#000" }}
            htmlFor="reenter-password"
          >
            Re-enter password
          </InputLabel>
          <TextField
            type="text"
            name="reenter-password"
            id="reenter-password"
            variant="outlined"
            size="small"
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
