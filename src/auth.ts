import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import NextAuth from "next-auth";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {
          type: "email",
          label: "Email",
          placeholder: "e.g your password",
        },
        password: { type: "password", label: "Password", placeholder: "*" },
      },
      authorize: async (credentials) => {
        if (!credentials) return null;
        const response = await fetch(
         `https://company-cc.vercel.app/api/user?email=${credentials.email}`
        );
        if (!response.ok) return null;
        const userData = await response.json();

        if (userData.error || userData.password !== credentials.password)
          return null;

        return {
          id: userData.objectId,
          name: userData.name,
          email: userData.email,
          role: userData.role,
        };

      },
    }),
    Google,
  ],
  callbacks: {
    async jwt({ token, user }) {
      const typedToken = token as typeof token & { role?: string };

      if (user) {
        typedToken.role = (user as { role?: string }).role;
      }
      return typedToken;
    },
    async session({ session, token }) {
      const typedUser = session.user as typeof session.user & { role?: string };

      if (typedUser && token.role) {
        typedUser.role = token.role as string;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  pages: { signIn: "/auth/sign-in" },
});