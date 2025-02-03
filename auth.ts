import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/db/prisma";
import CredentialsProvider from "next-auth/providers/credentials";
// Gunakan fungsi compare asynchronous jika tersedia
import { compare } from "bcrypt-ts-edge";
import type { NextAuthConfig } from "next-auth";

export const config = {
  pages: {
    signIn: "/sign-in",
    error: "/sign-in",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 hari
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
      async authorize(credentials) {
        try {
          // Pastikan email dan password telah disediakan
          if (!credentials?.email || !credentials?.password) {
            throw new Error("Email atau password tidak disediakan");
          }

          // Cari user di database berdasarkan email
          const user = await prisma.user.findFirst({
            where: {
              email: credentials.email as string,
            },
          });

          // Jika user tidak ditemukan atau password belum diset, log dan tolak otentikasi
          if (!user || !user.password) {
            console.warn(
              `Upaya login gagal: email ${credentials.email} tidak ditemukan atau password kosong`
            );
            throw new Error("Email atau password salah");
          }

          // Verifikasi password menggunakan fungsi asynchronous
          const isMatch = await compare(
            credentials.password as string,
            user.password
          );

          if (!isMatch) {
            console.warn(
              `Upaya login gagal: password salah untuk email ${credentials.email}`
            );
            throw new Error("Email atau password salah");
          }

          // Jika semua validasi valid, kembalikan data user
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
          };
        } catch (error) {
          console.error("Error saat otentikasi:", error);
          throw error;
        }
      },
    }),
  ],
  callbacks: {
    // Callback untuk memperkaya token JWT dengan informasi tambahan dari user

    // Callback untuk menyesuaikan session yang dikirim ke klien
    async session({ session, token }: any) {
      // Buat objek user baru dengan urutan yang diinginkan
      session.user = {
        id: token.sub,
        name: token.name || session.user.name,
        email: session.user.email,
        role: token.role,
      };

      return session;
    },
    async jwt({ token, user }: any) {
      if (user) {
        token.role = user.role;

        // Periksa name hanya jika user ada
        if (user.name === "NO_NAME") {
          token.name = user.email!.split("@")[0];
          await prisma.user.update({
            where: { id: user.id },
            data: { name: token.name },
          });
        }
      }

      return token;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
