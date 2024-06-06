import { ISignupFormField } from "./signup-form-field.interface";

export type NewUser = Omit<ISignupFormField, "confirmPassword">;
