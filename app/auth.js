import NextAuth from "next-auth";
import { ZodError } from "zod";
import Credentials from "next-auth/providers/credentials";
import { signInSchema } from "@/lib/zod";
import { getUserFromDb, simpleHash } from "@/lib/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          const { email, password } = await signInSchema.parseAsync(
            credentials
          );
          const pwHash = simpleHash(password);

          // Verify if the user exists
          const user = await getUserFromDb(email, pwHash);

          if (user) {
            // Return the user object
            return {
              id: user.username,
              name: user.username,
              email: user.email,
            };
          }

          // If user is not found, return null
          return null;
        } catch (error) {
          if (error instanceof ZodError) {
            // Handle Zod validation error
            return null;
          }
          throw new Error("Authorization error");
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      // Add custom logic if necessary, but typically you just return `true`
      return true;
    },
    async redirect({ url, baseUrl }) {
      // Redirect to /dashboard on successful sign-in
      return "/dashboard";
    },
    async session({ session, user }) {
      // Add user data to session object if necessary
      session.user = user;
      return session;
    },
  },
  pages: {
    signIn: "/auth/login", // Redirect to custom login page
  },
  debug: process.env.NODE_ENV === "development",
});
