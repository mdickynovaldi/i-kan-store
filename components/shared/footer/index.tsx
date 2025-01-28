// components/Footer.tsx
'use client'

import Link from 'next/link'

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">i-kan</h3>
            <p className="text-muted-foreground text-sm">
              Platform e-commerce terbaik untuk kebutuhan ikan segar dan produk perikanan berkualitas
            </p>
          </div>

          {/* Layanan */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Layanan</h4>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/track-order"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Lacak Pesanan
              </Link>
              <Link
                href="/faq"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="/returns"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Pengembalian
              </Link>
            </nav>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Legal</h4>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Kebijakan Privasi
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Syarat & Ketentuan
              </Link>
              <Link
                href="/disclaimer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Disclaimer
              </Link>
            </nav>
          </div>

          {/* Kontak */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Kontak</h4>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>support@i-kan.id</p>
              <p>(021) 1234-5678</p>
              <p>Jl. Perikanan No. 123, Jakarta</p>
              <div className="flex items-center gap-4 pt-2">
                <Link href="#" className="hover:text-foreground transition-colors">
                  <FaInstagram className="h-5 w-5" />
                </Link>
               
                <Link href="#" className="hover:text-foreground transition-colors">
                  <FaTwitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="hover:text-foreground transition-colors">
                  <FaFacebook className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t py-6">
          <p className="text-xs text-muted-foreground text-center">
            © {currentYear} i-kan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}