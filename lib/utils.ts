// Mengimpor modul "clsx" dan tipe "ClassValue" dari paket "clsx"
// "clsx" digunakan untuk menggabungkan sejumlah class name secara kondisional,
// sedangkan "ClassValue" mendefinisikan tipe nilai yang dapat diterima sebagai class (seperti string, array, atau objek).
import { clsx, type ClassValue } from "clsx";

// Mengimpor fungsi "twMerge" dari paket "tailwind-merge"
// "twMerge" digunakan untuk menggabungkan class names dengan cara yang khusus menangani konflik kelas Tailwind CSS.
import { twMerge } from "tailwind-merge";

// Fungsi "cn" bertugas menggabungkan dan mengoptimalkan daftar class names yang diberikan.
// Parameter "...inputs" menerima sejumlah nilai class yang valid, sesuai tipe "ClassValue".
export function cn(...inputs: ClassValue[]) {
  // Pertama, fungsi "clsx" menggabungkan input menjadi satu string class secara kondisional,
  // kemudian "twMerge" mengoptimalkan string tersebut dengan menggabungkan atau menghapus kelas yang redundan.
  return twMerge(clsx(inputs));
}

// Fungsi "convertToPlainObject" mengkonversi objek kompleks (seperti objek dari Prisma)
// ke dalam format objek JavaScript biasa (plain object) yang aman untuk diserialisasi.
// Proses konversi dilakukan dengan cara mengubah objek menjadi string JSON menggunakan JSON.stringify,
// lalu mengembalikannya ke dalam format objek dengan JSON.parse, sehingga menghilangkan properti berupa fungsi atau tipe yang tidak diserialisasi.
export default function convertToPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

// Fungsi "formatNumberWithDecimal" mengubah sebuah angka menjadi string dengan format dua digit desimal.
// Jika angka memiliki bagian desimal, fungsi ini memastikan ada tepat dua digit dengan menambahkan "0" di akhir jika perlu.
// Jika angka tidak memiliki bagian desimal, maka secara default akan mengembalikan angka tersebut dengan ".00" sebagai desimal.
export function formatNumberWithDecimal(num: number): string {
  // Mengonversi angka "num" menjadi string dan memecahnya berdasarkan tanda titik (".")
  // sehingga didapatkan bagian integer (sebelum titik) dan bagian desimal (setelah titik).
  const [int, decimal] = num.toString().split(".");

  // Jika terdapat bagian desimal, maka:
  // Menggunakan metode "padEnd" untuk memastikan bagian desimal memiliki panjang 2 karakter,
  // dengan menambahkan "0" di akhir jika panjang desimal kurang dari 2.
  // Jika tidak ada bagian desimal, maka mengembalikan string dengan ".00" ditambahkan pada nilai integer.
  // Catatan: Pada kondisi else, string "${int}.00" tidak menggunakan template literal (backticks),
  // sehingga nilai variabel "int" tidak akan terinterpolasi secara dinamis.
  // Jika ingin interpolasi variabel, sebaiknya gunakan backticks seperti `${int}.00`.
  return decimal ? `${int}.${decimal.padEnd(2, "0")}` : "${int}.00";
}
