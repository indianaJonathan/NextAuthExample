import { randomUUID } from "crypto";
import { LoginButton } from "../components/login-btn";
import { Provider } from "../lib/types";

export default function Login () {
    const providers: Provider[] = [
        {
            name: "google",
            label: "google",
        },
        {
            name: "microsoft-entra-id",
            label: "microsoft",
        },
        {
            name: "github",
            label: "gitHub",
        },
        {
            name: "twitter",
            label: "twitter (X)",
        }
    ];

    return (
        <div className="flex-1 flex flex-col items-center justify-center w-full">
            <div className="p-8 rounded-sm flex flex-col gap-2 items-center justify-center bg-zinc-800">
                { providers.map((provider) => (
                    <LoginButton key={randomUUID()} provider={provider} />
                )) }
            </div>
        </div>
    );
}
