"use client";
import { SITE_NAME } from "@/lib/constants";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaHome, FaSearch } from "react-icons/fa";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">
          Page Not Found
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <Link href="/">
          <Button className="flex items-center gap-2">
            <FaHome className="w-4 h-4" />
            Back to Home
          </Button>
        </Link>
        <Link href="/products">
          <Button variant="outline" className="flex items-center gap-2">
            <FaSearch className="w-4 h-4" />
            Browse Products
          </Button>
        </Link>
      </div>
    </div>
  );
}
