import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux/hooks";
import { Navigate } from "react-router-dom";
import { verifyJwt } from "../auth-slice";

const PrivateRoute = ({ page }: { page: JSX.Element }) => {
  const dispatch = useAppDispatch();
  const { isSuccess, jwt, isAuthenticated } = useAppSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (!jwt || !jwt?.token) return;

    dispatch(verifyJwt(jwt.token));
  }, [jwt, isSuccess]);

  return isAuthenticated ? page : <Navigate replace to="/sign" />;
};

export default PrivateRoute;
