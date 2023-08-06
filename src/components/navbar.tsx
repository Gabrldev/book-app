
import Link from "next/link";
import { signIn } from "next-auth/react";
import { buttonVariants } from "./ui/button";

const Navbar = () => {
  const loginwhitGoogle = async () => {
    try {
      await signIn("google");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="fixed top-0 inset-x-0 h-fit bg-zinc-100  border-b border-zinc-300 z-10 py-2">
      <div className="max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        {/* logo */}
        <Link href="/" className="flex gap-2 items-center">
          <p className="hidden text-zinc-700 text-sm font-medium md:block">
            BookApp
          </p>
          
        </Link>
        <Link href={'/sign-in'} className={buttonVariants()}>
          Login
        </Link>
        </div>
      </div>
  );
};

export default Navbar;
