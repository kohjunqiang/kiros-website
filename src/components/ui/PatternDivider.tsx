export function PatternDivider() {
    return (
        <div className="w-full h-10 flex items-center justify-center overflow-hidden">
            <div className="flex gap-[2px] min-w-full justify-center">
                {/* Repeating pattern of 4x4 rectangles with 2px gap (6px stride) */}
                {Array.from({ length: 240 }).map((_, i) => (
                    <div
                        key={i}
                        className="w-1 h-1 rounded-full bg-slate-200/20 shrink-0"
                    />
                ))}
            </div>
        </div>
    );
}
