import { reducer, screen } from "../../../shared/utils/test-utils";

import SignFormComponent from "./sign-form";

describe("Sign form", () => {
  let signButton = null;

  beforeEach(() => {
    reducer(<SignFormComponent />);
    signButton = screen.getByRole("button", { name: /sign-in/i });
  });

  test("The login button should be in the document", () => {
    expect(signButton).toBeInTheDocument();
  });
  test("The login button should initially be disabled", () => {
    expect(signButton).toBeDisabled();
  });
});
