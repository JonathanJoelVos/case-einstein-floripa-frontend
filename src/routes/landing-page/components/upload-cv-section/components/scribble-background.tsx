export function ScribbleBackground() {
    return (
        <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12]"
            viewBox="0 0 400 200"
            preserveAspectRatio="none"
        >
            <defs>
                <pattern id="dotgrid" width="22" height="22" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="1" fill="currentColor" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotgrid)" className="text-black/40 dark:text-white/40" />
            <path
                d="M10 40 C120 10,180 20,240 36 S360 76,392 48"
                stroke="currentColor"
                className="text-black/30 dark:text-white/30"
                strokeWidth="2"
                fill="none"
            />
        </svg>
    )
}