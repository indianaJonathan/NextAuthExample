import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import EntraProvider from "next-auth/providers/microsoft-entra-id";

export const {
    handlers: { GET, POST },
    auth,
} = NextAuth({
    session: { strategy: 'jwt' },

    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        EntraProvider({
            clientId: process.env.MICROSOFT_ENTRA_ID,
            clientSecret: process.env.MICROSOFT_ENTRA_SECRET,
            tenantId: process.env.MICROSOFT_ENTRA_TENANT,
        }),
    ]
})
