"use client"

import { signOut } from "next-auth/react";

export function LogoutButton() {
    return (
        <button
            onClick={() => signOut()} type="button"
            className="px-2 py-1 rounded-sm font-semibold bg-red-500 hover:bg-red-400"
        >
            Sair
        </button>
    );
}
