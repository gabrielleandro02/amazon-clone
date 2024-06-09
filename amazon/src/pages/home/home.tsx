/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import AuthLayout from "../../features/auth/components/auth-layout";
import { useAppDispatch, useAppSelector } from "../../hooks/redux/hooks";
import { selectedUser } from "../../features/auth/auth-slice";

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user, jwt } = useAppSelector(selectedUser);

  useEffect(() => {
    console.log("user", user, jwt);
  }, [user, jwt]);

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <AuthLayout>
      <h1>Home Page</h1>
      <a
        href="#"
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
