import React from "react";
import AuthLayout from "../../features/auth/components/auth-layout";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux/hooks";

// import { Container } from './styles';

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <AuthLayout>
      <h1>Home Page</h1>
      <a
        onClick={logoutHandler}
        style={{
          backgroundColor: "yellow",
          cursor: "pointer",
          height: "40px",
          width: "60px",
          padding: "8px",
        }}
      >
        Logout
      </a>
      {user?.email}
    </AuthLayout>
  );
};

export default HomePage;
function logout(): any {
  throw new Error("Function not implemented.");
}
