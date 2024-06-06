import { IDisplayUser } from "./display-user.interface";

export interface IDecodedJwt {
  user: IDisplayUser;
  exp: number;
  iat: number;
}
