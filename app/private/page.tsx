import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { LogoutButton } from "../components/logout-btn";

export default async function Private() {
    const session = await auth();

    if (!session) redirect('/');

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Página privada de {session.user?.email}</h1>
        </main>
    );
}