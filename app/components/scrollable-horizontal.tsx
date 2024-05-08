import { ReactNode } from "react";

interface ScrollableHorizontalProps {
    children: ReactNode | ReactNode[];
    color?: string;
}

export function ScrollableHorizontal ({ children, color = "black" }: ScrollableHorizontalProps) {
    return (
        <div className="relative flex-1 max-h-fit">
            <div className={`md:hidden absolute left-0 top-0 h-full w-12 bg-gradient-to-l from-transparent to-${color}/70 z-0`} />
            <div className="flex flex-row gap-4 flex-nowrap overflow-x-scroll pr-8">
                { children }
            </div>
            <div className={`md:hidden absolute right-0 top-0 h-full w-12 bg-gradient-to-r from-transparent to-${color}/70 z-0`} />
        </div>
    );
}
