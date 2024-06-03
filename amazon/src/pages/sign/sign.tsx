import React from "react";
import AuthLayout from "../../features/auth/components/authLayout";
import SignFormComponent from "../../features/auth/components/signForm";

// import { Container } from './styles';

const SignPage: React.FC = () => {
  return (
    <AuthLayout>
      <SignFormComponent />
    </AuthLayout>
  );
};

export default SignPage;
