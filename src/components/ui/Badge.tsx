interface BadgeProps {
    text: string;
    className?: string;
    variant?: "light" | "dark";
}

export function Badge({ text, className = "", variant = "light" }: BadgeProps) {
    const isDark = variant === "dark";

    return (
        <div
            className={`inline-flex items-center justify-center px-2 py-0.5 ${isDark
                ? "bg-[#141c2e] border-[rgba(226,232,240,0.15)]"
                : "bg-white border-[#e2e8f0]"
                } border shadow-[0px_1px_2px_0px_rgba(17,24,39,0.04)] relative ${className}`}
        >
            <span className="text-[14px] font-medium leading-[1.4] text-[#0284c7] uppercase tracking-normal">
                {text}
            </span>

            {/* Top-left corner decoration */}
            <div className="absolute left-0 top-0 w-2 h-2 border-l border-t border-[#0284c7]" />

            {/* Bottom-right corner decoration */}
            <div className="absolute right-0 bottom-0 w-2 h-2 border-r border-b border-[#0284c7]" />
        </div>
    );
}
