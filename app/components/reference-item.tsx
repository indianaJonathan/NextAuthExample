import Link from "next/link";
import { ComponentProps, ReactNode } from "react";

interface ReferenceItemProps extends ComponentProps<'a'>{
    href: string;
    children: ReactNode | ReactNode[];
}

export function ReferenceItem ({ href, children, ...rest }: ReferenceItemProps) {
    return (
        <Link href={href} target="_blank" {...rest}>
            <div className="rounded-md bg-zinc-500 flex flex-col gap-2 items-center justify-center p-4 w-32 h-full">
                { children }
            </div>
        </Link>
    );
}
