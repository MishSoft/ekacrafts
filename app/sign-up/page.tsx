"use client";
import { useUser, SignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const SignUpPage = () => {
  const { isSignedIn } = useUser();
  const router = useRouter();

  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignUp />
    </div>
  );
};

export default SignUpPage;
