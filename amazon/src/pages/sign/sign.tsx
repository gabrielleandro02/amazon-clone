import React from "react";
import AuthLayout from "../../features/auth/components/auth-layout";
import SignFormComponent from "../../features/auth/components/sign-form";

// import { Container } from './styles';

const SignPage: React.FC = () => {
  return (
    <AuthLayout>
      <SignFormComponent />
    </AuthLayout>
  );
};

export default SignPage;
