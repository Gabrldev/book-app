"use client";
import { cn } from "@/lib/utils";
import { FC, useState } from "react";
import { signIn } from "next-auth/react";
import { Button } from "./ui/button";
import { GoogleIcon } from "./icons";


interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const  AuthForm: FC<UserAuthFormProps> = ({
  className,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignIn = () => {
    setIsLoading(true);
    try {
      signIn("google");
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className={cn("flex justify-center", className)} {...props}>
      <Button
        isLoading={isLoading}
        type="button"
        size="sm"
        className="w-full"
        onClick={handleGoogleSignIn}
        disabled={isLoading}
      >
        {isLoading ? null : <GoogleIcon className="h-4 w-4 mr-2" />}
        Google
      </Button>
    </div>
  );
};

export default AuthForm;
