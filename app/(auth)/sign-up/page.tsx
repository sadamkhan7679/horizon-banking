import React from "react";
import AuthForm from "@/components/modules/Auth/AuthForm";
import { AuthFormType } from "@/types/auth";

type SignUpPageProps = {};

const SignUpPage: React.FC<SignUpPageProps> = () => {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type={AuthFormType.SignUp} />
    </section>
  );
};

export default SignUpPage;
