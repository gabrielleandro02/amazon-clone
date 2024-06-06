import React from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "./shared/utils/theme";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/home/home";
import SignUpPage from "./pages/signup/signup";
import SignPage from "./pages/sign/sign";
import PrivateRoute from "./features/auth/components/private-route";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<PrivateRoute page={<HomePage />} />}
          ></Route>
          <Route path="/signup" element={<SignUpPage />}></Route>
          <Route path="/sign" element={<SignPage />}></Route>]
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
