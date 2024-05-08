"use client"

import { Session } from "next-auth";
import Link from "next/link";
import { useState } from "react";
import { MdMenu } from "react-icons/md";

interface MobileNavbarProps {
    session: Session | null;
}

export function MobileNavbar ({ session }: MobileNavbarProps) {
    const [show, setShow] = useState<boolean>(false);

    return (
        <div className="relative" onMouseLeave={() => setShow(false)}>
            <button type="button" className="block md:hidden" onClick={() => setShow(!show)}>
                <MdMenu size={20} className="text-zinc-200" />
            </button>
            {show && <div className="absolute top-8 left-0 p-2 bg-zinc-800 ring-1 ring-zinc-700 flex flex-col gap-4">
                <Link href={`/`} className="px-4 py-2 rounded-sm hover:bg-zinc-700 z-10" onClick={() => setShow(false)}>
                    Público
                </Link>
                {session && <Link href={`/private`} className="px-4 py-2 rounded-sm hover:bg-zinc-700" onClick={() => setShow(false)}>
                    Privado
                </Link>}
            </div>}
        </div>
    );
}
