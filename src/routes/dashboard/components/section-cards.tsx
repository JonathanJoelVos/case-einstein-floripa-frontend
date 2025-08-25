// src/routes/dashboard/components/SectionCards.tsx
import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"
import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useAnalysesSummary } from "../hooks/use-analyses-summary"

function pct(n: number) {
    const sign = n > 0 ? "+" : n < 0 ? "" : ""
    return `${sign}${n.toFixed(1)}%`
}
function fmt(n: number) {
    return new Intl.NumberFormat("pt-BR").format(n)
}

export function SectionCards() {
    const { data, loading, error } = useAnalysesSummary(7)

    const total = data?.totalAnalyses ?? 0
    const avg = data?.avgCultureScore ?? 0
    const withExp = data?.withExperience ?? 0
    const eduAligned = data?.educationAligned ?? 0
    const change = data?.lastWindowChangePct ?? 0
    const changeUp = change >= 0

    const topArea =
        data &&
        Object.entries(data.byArea).sort((a, b) => b[1] - a[1])[0]

    return (
        <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
            <Card className="@container/card">
                <CardHeader>
                    <CardDescription>Currículos analisados</CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                        {loading ? "…" : fmt(total)}
                    </CardTitle>
                    <CardAction>
                        <Badge variant="outline">
                            {changeUp ? <IconTrendingUp /> : <IconTrendingDown />}
                            {loading ? "…" : pct(change)}
                        </Badge>
                    </CardAction>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className="line-clamp-1 flex gap-2 font-medium">
                        {changeUp ? "Alta vs semana anterior" : "Queda vs semana anterior"}{" "}
                        {changeUp ? <IconTrendingUp className="size-4" /> : <IconTrendingDown className="size-4" />}
                    </div>
                    <div className="text-muted-foreground">
                        Janela: últimos 7 dias
                    </div>
                </CardFooter>
            </Card>

            <Card className="@container/card">
                <CardHeader>
                    <CardDescription>Média de score cultural</CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                        {loading ? "…" : avg.toFixed(1)}
                    </CardTitle>
                    <CardAction>
                        <Badge variant="outline">
                            {avg >= 7 ? <IconTrendingUp /> : <IconTrendingDown />}
                            {avg >= 7 ? "Saudável" : "Atenção"}
                        </Badge>
                    </CardAction>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className="line-clamp-1 flex gap-2 font-medium">
                        Distribuição 0–10 consolidada
                    </div>
                    <div className="text-muted-foreground">
                        Indicador qualitativo geral
                    </div>
                </CardFooter>
            </Card>

            <Card className="@container/card">
                <CardHeader>
                    <CardDescription>Com experiência real</CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                        {loading ? "…" : fmt(withExp)}
                    </CardTitle>
                    <CardAction>
                        <Badge variant="outline">
                            {(total ? Math.round((withExp / total) * 100) : 0)}%
                        </Badge>
                    </CardAction>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className="line-clamp-1 flex gap-2 font-medium">
                        Estágio/emprego/voluntariado formal
                    </div>
                    <div className="text-muted-foreground">
                        Proporção sobre o total
                    </div>
                </CardFooter>
            </Card>

            <Card className="@container/card">
                <CardHeader>
                    <CardDescription>Docência / Ensinos</CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                        {loading ? "…" : fmt(eduAligned)}
                    </CardTitle>
                    <CardAction>
                        <Badge variant="outline">
                            {(total ? Math.round((eduAligned / total) * 100) : 0)}%
                        </Badge>
                    </CardAction>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className="line-clamp-1 flex gap-2 font-medium">
                        {loading
                            ? "—"
                            : topArea
                                ? `Área mais comum: ${topArea[0]} (${fmt(topArea[1])})`
                                : "Sem dados"}
                    </div>
                    <div className="text-muted-foreground">
                        Número de currículos de Docência ou de Hogwarts.
                    </div>
                </CardFooter>
            </Card>

            {error && (
                <div className="col-span-full px-2 text-sm text-red-500">
                    {error}
                </div>
            )}
        </div>
    )
}
