import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";

import Menu from "./menu";

export default function Header() {
  return (
    <header className="sticky top-0 bg-background z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo & Mobile Menu */}
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <FiMenu className="h-6 w-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem asChild>
                <Link href="/" className="w-full">
                  Beranda
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/products" className="w-full">
                  Produk
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/about" className="w-full">
                  Tentang Kami
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/contact" className="w-full">
                  Kontak
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/" className="text-2xl font-bold">
            <span className="text-primary">i</span>
            <span className="text-foreground">-kan</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Button asChild variant="ghost">
            <Link href="/">Beranda</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/products">Produk</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/about">Tentang Kami</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/contact">Kontak</Link>
          </Button>
        </nav>
        <Menu />
      </div>
    </header>
  );
}
