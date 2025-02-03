import Link from "next/link";
import { auth } from "@/auth";
import { signOutUser } from "@/lib/actions/user.actions";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaUser } from "react-icons/fa";
import { User } from "lucide-react";

const UserButton = async () => {
  const session = await auth();

  if (!session) {
    return (
      <Button asChild variant="default">
        <Link href="/sign-in">
          <FaUser className="h-6 w-6" /> Sign In
        </Link>
      </Button>
    );
  }

  const firstInitial = session.user?.name?.charAt(0).toUpperCase() ?? "U";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="relative w-10 h-10 rounded-full ml-2 flex items-center justify-center bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          variant="ghost"
          size="icon"
        >
          {firstInitial}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span className="text-sm font-medium">{session.user?.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">{session.user?.email}</span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuItem className="p-0 mb-1">
          <form className="w-full" action={signOutUser}>
            <Button size="sm" className="w-full">
              Logout
            </Button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
