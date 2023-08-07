"use client";
import { User } from "next-auth";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { LogOut, Settings, User as UserIcon } from "lucide-react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

interface AvatarProps {
  user: User;
}

const DropMenu: React.FC<AvatarProps> = ({ user }) => {
  const router = useRouter();

  const handleLogout = () => {
    signOut();
  };
  const handleSettings = () => {
    router.push("/settings");
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="cursor-pointer">
          <Image
            src={user.image || ""}
            alt="Avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={handleSettings}>
            <UserIcon className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default DropMenu;
