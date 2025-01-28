import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FiShoppingCart, FiMenu } from "react-icons/fi";
import Link from "next/link";

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
              <DropdownMenuItem>
                <a href="/" className="w-full">
                  Beranda
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/products" className="w-full">
                  Produk
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/about" className="w-full">
                  Tentang Kami
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/contact" className="w-full">
                  Kontak
                </a>
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
            <a href="/">Beranda</a>
          </Button>
          <Button asChild variant="ghost">
            <a href="/products">Produk</a>
          </Button>
          <Button asChild variant="ghost">
            <a href="/about">Tentang Kami</a>
          </Button>
          <Button asChild variant="ghost">
            <a href="/contact">Kontak</a>
          </Button>
        </nav>

        {/* Cart Icon */}
        <Button variant="outline" size="icon" className="relative">
          <FiShoppingCart className="h-6 w-6" />
          <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
            0
          </span>
        </Button>
      </div>
    </header>
  );
}
