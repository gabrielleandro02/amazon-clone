import React from "react";
import AuthLayout from "../../features/auth/components/auth-layout";
import RegistrationFormComponent from "../../features/auth/components/signup-form";

// import { Container } from './styles';

const SignUpPage: React.FC = () => {
  return (
    <AuthLayout>
      <RegistrationFormComponent></RegistrationFormComponent>
    </AuthLayout>
  );
};

export default SignUpPage;
