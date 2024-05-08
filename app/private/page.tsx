import { auth } from "@/auth";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Private() {
    const session = await auth();

    if (!session) redirect('/');

    return (
        <main className="flex-1 flex flex-col p-4 md:p-8">
            <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-4">
                <div className="flex-1 p-4 rounded-md bg-zinc-900">
                    <div className="flex flex-row gap-1">
                        <span className="text-xl md:text-2xl">
                            Olá, 
                        </span>
                        <span className="text-xl md:text-2xl font-semibold">
                            {session.user?.name}
                        </span>
                    </div>
                    <p className="text-sm md:text-base text-zinc-500">
                        Essa página só pode ser acessada após o sucesso na autenticação.
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-2 mt-5">
                        <div className="flex flex-row gap-1 overflow-hidden">
                            <span className="text-base md:text-sm text-nowrap">
                                E-mail:
                            </span>
                            <span className="flex-1 text-base md:text-sm font-semibold truncate">
                                {session.user?.email}
                            </span>
                        </div>
                        <div className="flex flex-row gap-1 px-2 py-1 bg-zinc-500 rounded-md">
                            <span className="text-base md:text-sm">
                                Sessão expira em
                            </span>
                            <span className="text-base md:text-sm font-semibold">
                                {Math.ceil((new Date(session.expires).getTime() - new Date().getTime()) / 1000 / 60 / 60)}
                            </span>
                            <span className="text-base md:text-sm">
                                horas
                            </span>
                        </div>
                    </div>
                </div>
                <div className="w-32 h-32 rounded-full overflow-hidden">
                    <Image
                        src={session.user?.image || ""}
                        alt="User profile image"
                        width={1000}
                        height={1000}
                        priority={false}
                    />
                </div>
            </div>
        </main>
    );
}
