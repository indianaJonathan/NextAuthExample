import { ReactNode } from "react";

interface ScrollableHorizontalProps {
    children: ReactNode | ReactNode[];
}

export function ScrollableHorizontal ({ children }: ScrollableHorizontalProps) {
    return (
        <div className="relative">
            <div className="flex flex-row gap-4 flex-nowrap overflow-x-scroll pr-12">
                { children }
            </div>
            <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-r from-transparent to-black/70" />
        </div>
    );
}
