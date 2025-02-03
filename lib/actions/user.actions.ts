"use server"; // Menandakan bahwa file ini berisi server-side actions

// Import fungsi dan tipe yang diperlukan
import { signInSchema, signUpSchema } from "../validators"; // Import schema validasi untuk sign in
import { signIn, signOut } from "@/auth"; // Import fungsi auth untuk sign in dan sign out
import { FormValues, SignUpFormValues } from "@/types";
import { isRedirectError } from "next/dist/client/components/redirect-error"; // Import untuk mengecek error redirect
import { hashSync } from "bcrypt-ts-edge";
import { prisma } from "@/db/prisma";

// Fungsi untuk melakukan sign in user dengan credentials (email & password)
export async function signInWithCredetials(
  formData: FormValues // Parameter untuk menerima data form
) {
  try {
    // Validasi data user menggunakan schema Zod
    const user = signInSchema.parse({
      email: formData.email, // Ambil email dari form

      password: formData.password, // Ambil password dari form
    });

    // Lakukan sign in menggunakan provider credentials
    await signIn("credentials", { ...user, callbackUrl: "/" });
    // Jika berhasil, return success true
    return { success: true, message: "Signed in successfully" };
  } catch (error) {
    // Jika terjadi error redirect, throw error tersebut
    if (isRedirectError(error)) {
      throw error;
    }

    // Jika gagal sign in, return success false

    return { success: false, message: "Invalid email or password" };
  }
}

// Fungsi untuk melakukan sign out user
export async function signOutUser() {
  await signOut(); // Panggil fungsi signOut dari NextAuth
}

//sign up user
export async function signUpUser(formData: SignUpFormValues) {
  try {
    const user = signUpSchema.parse({
      name: formData.name,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
    });

    // Cek apakah email sudah terdaftar
    const existingUser = await prisma.user.findUnique({
      where: {
        email: user.email,
      },
    });

    if (existingUser) {
      return {
        success: false,
        message: "Email sudah terdaftar. Silakan gunakan email lain.",
      };
    }

    const plainPassword = user.password;
    user.password = hashSync(user.password, 10);

    await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
    });

    await signIn("credentials", {
      email: user.email,
      password: plainPassword,
    });

    return { success: true, message: "Berhasil mendaftar" };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }

    return { success: false, message: "Failed to sign up" };
  }
}
