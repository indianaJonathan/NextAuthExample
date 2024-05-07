import { auth } from "@/auth";
import Link from "next/link";
import { LogoutButton } from "./logout-btn";

export async function Navbar() {
    const session = await auth();

    return (
        <div className="w-full px-4 py-2 flex flex-row gap-4 bg-zinc-500">
            <div className="flex-1 flex flex-row gap-2">
                <Link href={`/`} className="px-4 py-2 rounded-sm hover:bg-zinc-700">
                    Home
                </Link>
                {session && <Link href={`/private`} className="px-4 py-2 rounded-sm hover:bg-zinc-700">
                    Privado
                </Link>}
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
                    <div className="px-2 py-1 rounded-sm bg-white/30 hover:bg-white/20">
                        <span>
                            Entrar
                        </span>
                    </div>
                </Link>
            }
        </div>
    );
}
