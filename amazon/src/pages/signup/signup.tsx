import React from "react";
import AuthLayout from "../../features/auth/components/authLayout";
import RegistrationFormComponent from "../../features/auth/components/signupForm";

// import { Container } from './styles';

const SignUpPage: React.FC = () => {
  return (
    <AuthLayout>
      <RegistrationFormComponent></RegistrationFormComponent>
    </AuthLayout>
  );
};

export default SignUpPage;
