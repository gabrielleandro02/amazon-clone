import { ChangeEvent, useReducer } from "react";
import { IInputState } from "./models/input-state.interface";
import {
  INPUT_ACTION_BLUR,
  INPUT_ACTION_CHANGE,
  INPUT_ACTION_CLEAR,
  InputActionType,
} from "./models/input-action";
import { Action } from "../../shared/models/action.interface";
import { ValidatorFn } from "../../shared/utils/validation/models/validator-fn";

const initialInputState: IInputState = {
  text: "",
  hasBeenTouched: false,
};

const inputReducer = (state: IInputState, action: Action<InputActionType>) => {
  const { type, value = "" } = action;

  switch (type) {
    case INPUT_ACTION_CHANGE:
      return { text: value, hasBeenTouched: state.hasBeenTouched };
    case INPUT_ACTION_BLUR:
      return { text: state.text, hasBeenTouched: true };
    case INPUT_ACTION_CLEAR:
      return { text: "", hasBeenTouched: false };

    default:
      return { ...state };
  }
};

const useInput = (validatorFn?: ValidatorFn) => {
  const [{ text, hasBeenTouched }, dispatch] = useReducer(
    inputReducer,
    initialInputState
  );

  let shouldDisplayError;

  if (validatorFn) {
    const isValid = validatorFn(text);

    shouldDisplayError = !isValid && hasBeenTouched;
  }
  const textChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: INPUT_ACTION_CHANGE, value: e.target.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: INPUT_ACTION_BLUR });
  };

  const clearHandler = () => {
    dispatch({ type: INPUT_ACTION_CLEAR });
  };

  return {
    text,
    shouldDisplayError,
    textChangeHandler,
    inputBlurHandler,
    clearHandler,
  };
};

export default useInput;
