import { Button } from "@/components/ui/button";
import ModeToggle from "./mode-toggle";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CiMenuKebab } from "react-icons/ci";

export default function Menu() {
  return (
    <>
      <div className="flex justify-end gap-3">
        <nav className="hidden md:flex w-full max-w-xs gap-1">
          {" "}
          <div className="flex items-center gap-4">
            <div>
              <ModeToggle />
            </div>
            {/* Cart Icon */}
            <Button variant="outline" size="icon" className="relative">
              <FiShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
            <Button asChild variant="default">
              <Link href="/sign-in">
                <FaUser className="h-6 w-6" /> Sign In
              </Link>
            </Button>
          </div>
        </nav>
        <nav className="md:hidden">
          <Sheet>
            <SheetTrigger className="align-middle">
              <CiMenuKebab className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent className="flex flex-col items-start">
              <SheetTitle>Menu</SheetTitle>
              <ModeToggle></ModeToggle>
              <Button asChild variant="ghost" size="icon" className="relative">
                <Link href="/cart">
                  <FiShoppingCart className="h-6 w-6" />
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    0
                  </span>
                </Link>
              </Button>
              <Button asChild variant="default">
                <Link href="/sign-in">
                  <FaUser className="h-6 w-6" /> Sign In
                </Link>
              </Button>
              <SheetDescription></SheetDescription>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </>
  );
}
