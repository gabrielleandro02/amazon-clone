import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { IDisplayUser } from "../models/display-user.interface";
import { NewUser } from "../models/new-user.type";
import { IloginUser } from "../models/login-user.interface";
import { Jwt } from "../models/jwt.type";
import { IDecodedJwt } from "../models/decoded-jwt.interface";

const signup = async (newUser: NewUser): Promise<IDisplayUser | null> => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_API}/auth/register`,
    newUser
  );

  return response.data;
};

const sign = async (user: IloginUser): Promise<Jwt> => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_API}/auth/login`,
    user
  );

  if (response.data) {
    localStorage.setItem("jwt", JSON.stringify(response.data));
    const decodedJwt: IDecodedJwt = jwtDecode(response.data.token);

    localStorage.setItem("user", JSON.stringify(decodedJwt.user));
  }

  return response.data;
};

const verifyJwt = async (jwt: string): Promise<boolean> => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_API}/auth/verify-jwt`,
    { jwt }
  );

  if (response.data) {
    const jwtExpirationMs = response.data.exp * 1000;
    return jwtExpirationMs > Date.now();
  }

  return false;
};

const signout = (): void => {
  localStorage.removeItem("user");
  localStorage.removeItem("jwt");
};

const authService = {
  signup,
  signout,
  sign,
  verifyJwt,
};

export default authService;
