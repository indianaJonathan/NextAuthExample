"use client"

import { signIn } from "next-auth/react";

export function LoginButton() {
    return (
        <button onClick={() => signIn('google', { callbackUrl: '/private' })} type="button">
            Entrar com google
        </button>
    );
}