"use client";
import { SignIn, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const SignInPage = () => {
  const { isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.push("/dashboard");
    }
  }, [isSignedIn, router]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignIn />
    </div>
  );
};

export default SignInPage;
