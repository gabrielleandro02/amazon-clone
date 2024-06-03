import React from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "./shared/utils/theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/home";
import SignUpPage from "./pages/signup/signup";
import SignPage from "./pages/sign/sign";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/signup" element={<SignUpPage />}></Route>
          <Route path="/sign" element={<SignPage />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
