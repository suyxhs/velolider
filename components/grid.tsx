import { ReactNode } from "react"

import { twMerge } from "tailwind-merge";

interface GridContainerProps {
    children: ReactNode
    className?: string;
}

export function GridContainer({children, className}: GridContainerProps) {
    const defaultClass = "w-full mx-auto max-w-grid px-3" 
    const combinedClasses = twMerge(defaultClass, className)
    return(
        <div className={combinedClasses}>
            {children}
        </div>
    )
}