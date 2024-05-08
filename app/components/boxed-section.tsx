import { ReactNode } from "react";

interface BoxedSectionProps {
    title: string;
    children: ReactNode | ReactNode[];
}

export function BoxedSection ({ title, children }: BoxedSectionProps) {
    return (
        <div className="flex flex-col">
            <span className="text-2xl font-bold">
                { title }
            </span>
            <div className= "ring-1 ring-zinc-500 rounded-md p-4 flex flex-col gap-3">
                { children }
            </div>
        </div>
    );
}
