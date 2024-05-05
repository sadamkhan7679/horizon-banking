import React from "react";
import AuthForm from "@/components/modules/Auth/AuthForm";
import { AuthFormType } from "@/types/auth";

type SignInPageProps = {};

const SignInPage: React.FC<SignInPageProps> = async () => {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type={AuthFormType.SignIn} />
    </section>
  );
};

export default SignInPage;
