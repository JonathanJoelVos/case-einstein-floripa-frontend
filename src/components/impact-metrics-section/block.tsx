import { CountUp } from "../count-up";

interface ImpactMetricsBlockProps {
    end: number;
    label: string;
    big?: boolean;
    compact?: boolean;
}
export function ImpactMetricsBlock({
    big = false,
    end,
    label,
    compact
}: ImpactMetricsBlockProps) {
    return (
        <div className="flex items-baseline gap-3 font-excalidraw">
            <CountUp
                end={end}
                compact={compact}
                duration={1.0}
                className={big ? "text-4xl md:text-5xl font-bold" : "text-3xl md:text-4xl font-bold"}
            />
            <span className={big ? "text-lg md:text-xl text-white/85" : "text-base md:text-lg text-white/85"}>
                {label}
            </span>
        </div>
    )
}