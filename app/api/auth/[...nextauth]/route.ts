import connectDb from "@/app/utils/connectDb";
import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import User from "../../model/UserModel";

const handler = NextAuth({
  providers: [
    CredentialProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        try {
          const { email, password } = credentials!;
          await connectDb();

          const user = await User.findOne({ email });
          if (!user) {
            throw new Error("User not found");
          }

          // Compare the hashed password
          const isPasswordValid = await bcrypt.compare(password, user.password);
          if (!isPasswordValid) {
            throw new Error("Invalid email or password");
          }

        
          return {
            id: user._id,
            name: user.name,
            email: user.email,
          };
        } catch (error: any) {
          throw new Error(error.message || "Authentication failed");
        }
      },
    }),
  ],
  // pages: {
  //   signIn: "/auth/signin", 
  // },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
