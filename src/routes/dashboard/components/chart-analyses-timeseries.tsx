/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import { useIsMobile } from "@/hooks/use-mobile"
import {
    Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle,
} from "@/components/ui/card"
import {
    type ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { useAnalysesTimeseries } from "../hooks/use-analyses-timeseries"

const chartConfig = {
    withExperience: {
        label: "Com experiência",
        color: "var(--primary)",
    },
    educationAligned: {
        label: "Docência/Ensinos",
        color: "var(--primary)",
    },
} satisfies ChartConfig

function rangeToDays(r: "90d" | "30d" | "7d") {
    if (r === "30d") return 30
    if (r === "7d") return 7
    return 90
}

export function ChartAnalysesTimeseries() {
    const isMobile = useIsMobile()
    const [timeRange, setTimeRange] = React.useState<"90d" | "30d" | "7d">("90d")

    React.useEffect(() => {
        if (isMobile) setTimeRange("7d")
    }, [isMobile])

    const { data, loading } = useAnalysesTimeseries({ days: rangeToDays(timeRange) })

    const chartData = React.useMemo(
        () =>
            data.map(d => ({
                date: d.date,
                withExperience: d.withExperience,
                educationAligned: d.educationAligned,
            })),
        [data]
    )

    return (
        <Card className="@container/card">
            <CardHeader>
                <CardTitle>Triagem por dia</CardTitle>
                <CardDescription>
                    <span className="hidden @[540px]/card:block">
                        Com experiência vs Docência/Ensinos
                    </span>
                    <span className="@[540px]/card:hidden">Último período</span>
                </CardDescription>
                <CardAction>
                    <ToggleGroup
                        type="single"
                        value={timeRange}
                        onValueChange={(v) => v && setTimeRange(v as any)}
                        variant="outline"
                        className="hidden *:data-[slot=toggle-group-item]:!px-4 @[767px]/card:flex"
                    >
                        <ToggleGroupItem value="90d">Últ. 90 dias</ToggleGroupItem>
                        <ToggleGroupItem value="30d">Últ. 30 dias</ToggleGroupItem>
                        <ToggleGroupItem value="7d">Últ. 7 dias</ToggleGroupItem>
                    </ToggleGroup>
                    <Select value={timeRange} onValueChange={(v) => setTimeRange(v as any)}>
                        <SelectTrigger
                            className="flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden"
                            size="sm"
                            aria-label="Selecionar período"
                        >
                            <SelectValue placeholder="Últ. 90 dias" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl">
                            <SelectItem value="90d" className="rounded-lg">Últ. 90 dias</SelectItem>
                            <SelectItem value="30d" className="rounded-lg">Últ. 30 dias</SelectItem>
                            <SelectItem value="7d" className="rounded-lg">Últ. 7 dias</SelectItem>
                        </SelectContent>
                    </Select>
                </CardAction>
            </CardHeader>

            <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
                <ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full">
                    <AreaChart data={chartData}>
                        <defs>
                            <linearGradient id="fillExp" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="var(--color-withExperience)" stopOpacity={1.0} />
                                <stop offset="95%" stopColor="var(--color-withExperience)" stopOpacity={0.1} />
                            </linearGradient>
                            <linearGradient id="fillEdu" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="var(--color-educationAligned)" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="var(--color-educationAligned)" stopOpacity={0.1} />
                            </linearGradient>
                        </defs>

                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="date"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            minTickGap={32}
                            tickFormatter={(value) => {
                                const date = new Date(value)
                                return date.toLocaleDateString("pt-BR", { month: "short", day: "numeric" })
                            }}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={
                                <ChartTooltipContent
                                    labelFormatter={(value) =>
                                        new Date(value).toLocaleDateString("pt-BR", { month: "short", day: "numeric" })
                                    }
                                    indicator="dot"
                                />
                            }
                        />
                        <Area
                            dataKey="educationAligned"
                            type="natural"
                            fill="url(#fillEdu)"
                            stroke="var(--color-educationAligned)"
                            stackId="a"
                        />
                        <Area
                            dataKey="withExperience"
                            type="natural"
                            fill="url(#fillExp)"
                            stroke="var(--color-withExperience)"
                            stackId="a"
                        />
                    </AreaChart>
                </ChartContainer>

                {loading && <div className="mt-2 text-xs text-muted-foreground">Carregando…</div>}
            </CardContent>
        </Card>
    )
}
