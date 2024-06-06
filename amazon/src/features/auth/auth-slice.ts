import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IDisplayUser } from "./models/display-user.interface";
import { Jwt } from "./models/jwt.type";
import authService from "./services/auth.service";
import { NewUser } from "./models/new-user.type";
import { RootState } from "../../store";
import { IloginUser } from "./models/login-user.interface";

const storedUser: string | null = localStorage.getItem("user");
const user: IDisplayUser | null = !!storedUser ? JSON.parse(storedUser) : null;

const storedJwt: string | null = localStorage.getItem("jwt");
const jwt: Jwt | null = !!storedJwt ? JSON.parse(storedJwt) : null;

interface AsyncState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}

interface AuthState extends AsyncState {
  user?: IDisplayUser | null;
  jwt?: Jwt;
  isAuthenticated?: boolean;
}

const initialState: AuthState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  user: user,
  jwt: jwt,
  isAuthenticated: false,
};

export const signup = createAsyncThunk(
  "auth/register",
  async (user: NewUser, thunkAPI) => {
    try {
      return await authService.signup(user);
    } catch (error) {
      return thunkAPI.rejectWithValue("Unable to register");
    }
  }
);

export const sign = createAsyncThunk(
  "auth/login",
  async (user: IloginUser, thunkAPI) => {
    try {
      return await authService.sign(user);
    } catch (error) {
      return thunkAPI.rejectWithValue("Unable to sign");
    }
  }
);

export const verifyJwt = createAsyncThunk(
  "auth/verify-jwt",
  async (jwt: string, thunkAPI) => {
    try {
      return await authService.verifyJwt(jwt);
    } catch (error) {
      return thunkAPI.rejectWithValue("Unable to verify");
    }
  }
);

export const signout = createAsyncThunk("auth/logout", async () => {
  await authService.signout();
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      //signup
      .addCase(signup.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action?.payload;
      })
      .addCase(signup.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.user = null;
      })
      //sign
      .addCase(sign.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sign.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.jwt = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(sign.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.user = null;
        state.isAuthenticated = false;
      })
      //signout
      .addCase(signout.fulfilled, (state, action) => {
        state.user = null;
        state.jwt = null;
        state.isAuthenticated = false;
      })
      //verifyjwt
      .addCase(verifyJwt.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(verifyJwt.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isAuthenticated = action.payload;
      })
      .addCase(verifyJwt.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isAuthenticated = false;
      });
  },
});

export const { reset } = authSlice.actions;

export const selectedUser = (state: RootState) => {
  return state.auth;
};

export default authSlice.reducer;
