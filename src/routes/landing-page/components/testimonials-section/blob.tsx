export function BlobBg({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 1200 420"
            preserveAspectRatio="none"
            className={`pointer-events-none absolute inset-0 -z-10 h-full w-full ${className}`}
        >
            <path
                d="M120 220c-30-70 40-130 110-150 90-26 210-30 320-14 120 18 200 60 252 112 37 37 56 85 24 122-32 37-108 39-178 46-176 18-346 55-456 24-42-12-82-40-95-68-11-23-4-46 23-72z"
                fill="currentColor"
                opacity="0.95"
            />
            <path
                d="M120 220c-30-70 40-130 110-150 90-26 210-30 320-14 120 18 200 60 252 112 37 37 56 85 24 122-32 37-108 39-178 46-176 18-346 55-456 24-42-12-82-40-95-68-11-23-4-46 23-72z"
                fill="none"
                stroke="#09202b"
                strokeOpacity="0.25"
                strokeWidth="3"
            />
            <path
                d="M132 216c-28-62 42-120 108-142 88-31 212-34 318-16 115 21 194 64 240 108 34 34 52 82 24 116-28 34-103 39-170 46-173 18-344 56-446 28-45-13-83-45-92-70-8-21 0-42 18-60z"
                fill="none"
                stroke="#09202b"
                strokeOpacity="0.18"
                strokeWidth="2"
            />
        </svg>
    )
}