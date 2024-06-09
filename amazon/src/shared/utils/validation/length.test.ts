import { validateNameLength, validatePasswordLength } from "./length";

describe("Length validation", () => {
  describe("Name field", () => {
    let name = "";

    test("a name should fail length validation if it is not set", () => {
      expect(validateNameLength(name)).toEqual(false);
    });

    test("a name should fail length validation if it is less then 2 characters", () => {
      name = "J";
      expect(validateNameLength(name)).toEqual(false);
    });

    test("a name should pass length validation if it is less then 2 characters", () => {
      name = "Jo";
      expect(validateNameLength(name)).toEqual(true);
    });

    test("a name should pass length validation if it is less then more 2 characters", () => {
      name = "Jon";
      expect(validateNameLength(name)).toEqual(true);
    });
  });

  describe("Password field", () => {
    let password = "";

    test("a password should fail length validation if it is not set", () => {
      expect(validatePasswordLength(password)).toEqual(false);
    });

    test("a password should fail length validation if it is less then 2 characters", () => {
      password = "J";
      expect(validatePasswordLength(password)).toEqual(false);
    });

    test("a password should fail length validation if it is more then 20 characters", () => {
      password = "123456778890123455662";
      expect(validatePasswordLength(password)).toEqual(false);
    });

    test("a password should pass length validation if it is 6-20 characters", () => {
      password = "Password";
      expect(validatePasswordLength(password)).toEqual(true);
    });
  });
});
