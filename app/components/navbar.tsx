import { auth } from "@/auth";

import Link from "next/link";
import Image from "next/image";

import { LogoutButton } from "./logout-btn";

import { MobileNavbar } from "./mobile-navbar";

export async function Navbar() {
    const session = await auth();

    return (
        <div className="w-full px-4 py-2 flex flex-row gap-4 items-center bg-zinc-800">
            <div className="flex-1 flex flex-row items-center gap-4">
                <MobileNavbar session={session} />
                <Link href={`/`} className="flex flex-row gap-2 items-center">
                    <div className="w-7 h-auto">
                        <Image 
                            src={`https://next-auth.js.org/img/logo/logo-xs.png`}
                            alt="NextAuth logo"
                            width={300}
                            height={300}
                            priority={false}
                        />
                    </div>
                    <div className="hidden md:block">
                        <span className="font-bold">
                            NextAuth Example
                        </span>
                    </div>
                </Link>
                <div className="hidden md:block">
                    <Link href={`/`} className="px-4 py-2 rounded-sm hover:bg-zinc-700 z-10">
                        Público
                    </Link>
                    {session && <Link href={`/private`} className="px-4 py-2 rounded-sm hover:bg-zinc-700">
                        Privado
                    </Link>}
                </div>
            </div>
            {session &&
                <div className="flex flex-row gap-2 items-center">
                    <span>Olá, {session.user?.name}</span>
                    <LogoutButton />
                </div>
            }
            {!session &&
                <Link
                    href={`/auth`}
                >
                    <div className="px-2 py-1 rounded-sm ring-1 ring-zinc-500 hover:bg-zinc-500 group">
                        <span className="text-white group-hover:text-black">
                            Entrar
                        </span>
                    </div>
                </Link>
            }
        </div>
    );
}
