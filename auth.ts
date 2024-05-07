import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import EntraProvider from "next-auth/providers/microsoft-entra-id";
import GithubProvider from "next-auth/providers/github";
import LinkedinProvider from "next-auth/providers/linkedin";
import TwitterProvider from "next-auth/providers/twitter";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    session: { strategy: 'jwt' },

    providers: [
        GoogleProvider,
        EntraProvider({
            clientId: process.env.AUTH_MICROSOFT_ENTRA_ID_ID,
            clientSecret: process.env.AUTH_MICROSOFT_ENTRA_ID_SECRET,
            tenantId: process.env.AUTH_MICROSOFT_ENTRA_ID_TENANT_ID,
        }),
        GithubProvider,
        LinkedinProvider({
            clientId: process.env.AUTH_LINKEDIN_ID,
            clientSecret: process.env.AUTH_LINKEDIN_SECRET,
        }),
        TwitterProvider,
    ]
})
