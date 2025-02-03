"use server"; // Menandakan bahwa kode ini dijalankan di sisi server

// Mengimpor instance Prisma yang sudah dikonfigurasi untuk berinteraksi dengan database
import { prisma } from "@/db/prisma";

// Mengimpor fungsi convertToPlainObject yang digunakan untuk mengubah objek kompleks menjadi objek JavaScript biasa (plain object)
import convertToPlainObject from "@/lib/utils";

// Mengimpor konstanta LATEST_PRODUCTS_LIMIT yang menentukan batas jumlah produk terbaru yang akan diambil
import { LATEST_PRODUCTS_LIMIT } from "../constants";

// Fungsi asinkron untuk mengambil produk-produk terbaru dari database
export default async function getLatestProducts() {
  // Mengambil data produk dengan batas jumlah dan mengurutkan berdasarkan tanggal pembuatan secara menurun (produk terbaru di atas)
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT, // Batasi jumlah produk yang diambil sesuai konstanta LATEST_PRODUCTS_LIMIT
    orderBy: { createdAt: "desc" }, // Urutkan produk berdasarkan field createdAt secara descending
  });
  // Mengonversi data produk yang diambil ke dalam plain object agar mudah digunakan/diproses di tempat lain
  return convertToPlainObject(data);
}

// Fungsi asinkron untuk mengambil satu produk berdasarkan slug (identifier unik untuk produk)
export async function getProductBySlug(slug: string) {
  // Mencari produk pertama yang memiliki nilai slug sama dengan parameter yang diberikan
  return await prisma.product.findFirst({
    where: { slug: slug }, // Kondisi pencarian berdasarkan field slug
  });
}
