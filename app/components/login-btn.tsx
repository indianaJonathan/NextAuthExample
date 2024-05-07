"use client"

import { signIn } from "next-auth/react";
import { IoLogoGoogle } from "react-icons/io";
import { IoLogInOutline, IoLogoMicrosoft } from "react-icons/io5";
import { Provider } from "../lib/types";

interface LoginButtonProps {
    provider: Provider;
}

export function LoginButton({ provider }: LoginButtonProps) {
    return (
        <button
            onClick={() => signIn(`${provider.name}`, {
                callbackUrl: '/private'
            })}
            type="button"
            className="px-3 py-2 flex flex-row items-center justify-between gap-4 rounded-sm bg-zinc-500 w-full"
        >
            {getIcon(provider.name)}
            <span className="text-black font-semibold text-left flex-1">
                Entrar com uma conta { capitalize(`${provider.label}`) }
            </span>
        </button>
    );
}

function getIcon (provider: string) {
    switch (provider) {
        case "google":
            return <IoLogoGoogle size={20} className="text-black" />
        case "microsoft":
            return <IoLogoMicrosoft size={20} className="text-black" />
        default:
            return <IoLogInOutline size={20} className="text-black" />
    }
}

function capitalize (text: string) {
    const firstLetter: string = text.charAt(0).toUpperCase();

    return firstLetter.concat(text.substring(1, text.length));
}
