import { type ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Drawer, DrawerTrigger, DrawerContent, DrawerHeader,
    DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose
} from "@/components/ui/drawer"
import { IconExternalLink, IconCircleCheckFilled } from "@tabler/icons-react"
import type { Analysis } from "../../types/analysis-type"
import {
    Banknote, HeartHandshake, Cpu, Megaphone,
    GraduationCap, School, Tag, Link as LinkIcon
} from "lucide-react"

type Area =
    | "Ministerio"
    | "Embaixada do Amor"
    | "Vale do Silicio"
    | "Time Square"
    | "Hogwarts"
    | "Docencia"

const areaIconMap: Record<Area, React.ComponentType<{ className?: string }>> = {
    Ministerio: Banknote,
    "Embaixada do Amor": HeartHandshake,
    "Vale do Silicio": Cpu,
    "Time Square": Megaphone,
    Hogwarts: GraduationCap,
    Docencia: School,
}

function AreaBadge({ name }: { name: string }) {
    const Icon = areaIconMap[name as Area] ?? Tag
    return (
        <Badge variant="outline" className="inline-flex items-center gap-1.5 px-2 py-0.5">
            <Icon className="h-3.5 w-3.5" />
            <span>{name}</span>
        </Badge>
    )
}

export const columnsAnalyses: ColumnDef<Analysis>[] = [
    {
        accessorKey: "name",
        header: "Nome",
        cell: ({ row }) => {
            const item = row.original
            return (
                <Drawer>
                    <DrawerTrigger asChild>
                        <Button variant="link" className="px-0 hover:cursor-pointer">
                            {item.name || "—"}
                        </Button>
                    </DrawerTrigger>
                    <DrawerContent>
                        <DrawerHeader>
                            <DrawerTitle>{item.name || "Sem nome"}</DrawerTitle>
                            <DrawerDescription>
                                {item.email || "Sem e-mail"} • {item.phone || "Sem telefone"}
                            </DrawerDescription>
                        </DrawerHeader>

                        <div className="px-4 pb-4 space-y-4 text-sm">
                            <div className="flex flex-wrap gap-2">
                                {item.areas.map((a) => (
                                    <AreaBadge key={a} name={a} />
                                ))}
                            </div>
                            <div className="flex items-center gap-2">
                                <Badge variant="secondary">Score cultural: {item.cultureScore}</Badge>
                                {item.realExperience && (
                                    <Badge className="gap-1">
                                        <IconCircleCheckFilled className="size-3" /> Experiência real
                                    </Badge>
                                )}
                                {typeof item.yearsOfExperience === "number" && (
                                    <Badge variant="outline">{item.yearsOfExperience} ano(s)</Badge>
                                )}
                            </div>
                            {item.summary && (
                                <div>
                                    <div className="text-xs font-medium uppercase text-muted-foreground">Resumo</div>
                                    <div>{item.summary}</div>
                                </div>
                            )}
                            {item.cultureScoreDescription && (
                                <div>
                                    <div className="text-xs font-medium uppercase text-muted-foreground">Por que essa nota?</div>
                                    <div>{item.cultureScoreDescription}</div>
                                </div>
                            )}
                        </div>

                        <DrawerFooter>
                            {item.resume.url ? (
                                <Button asChild>
                                    <a
                                        href={`${import.meta.env.VITE_API_BASE_URL}${item.resume.url}`}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Abrir arquivo <IconExternalLink className="ml-2 size-4" />
                                    </a>
                                </Button>
                            ) : (
                                <Button variant="secondary" disabled>
                                    Arquivo indisponível
                                </Button>
                            )}
                            <DrawerClose asChild>
                                <Button variant="outline">Fechar</Button>
                            </DrawerClose>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            )
        },
    },
    {
        accessorKey: "email",
        header: "E-mail",
        cell: ({ row }) => row.original.email || "—",
    },
    {
        accessorKey: "areas",
        header: "Áreas",
        cell: ({ row }) => (
            <div className="flex flex-wrap gap-1.5 max-w-[320px]">
                {row.original.areas.map((a) => (
                    <AreaBadge key={a} name={a} />
                ))}
            </div>
        ),
    },
    {
        accessorKey: "cultureScore",
        header: "Score",
        cell: ({ row }) => {
            const s = row.original.cultureScore
            const color =
                s >= 9
                    ? "bg-green-200 text-green-900"
                    : s >= 7
                        ? "bg-emerald-100 text-emerald-800"
                        : s >= 4
                            ? "bg-amber-100 text-amber-800"
                            : "bg-red-100 text-red-800"
            return (
                <div className={`px-2 py-0.5 rounded w-6 flex justify-center text-xs tabular-nums ${color}`}>
                    {s}
                </div>
            )
        },
    },
    {
        accessorKey: "resume",
        header: "Arquivo",
        cell: ({ row }) => {
            const r = row.original.resume
            return r.url ? (
                <a
                    href={`${import.meta.env.VITE_API_BASE_URL}${r.url}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 underline-offset-4 hover:underline"
                >
                    <LinkIcon className="w-3 h-3" /> Ver arquivo
                </a>
            ) : (
                "—"
            )
        },
    },
]
