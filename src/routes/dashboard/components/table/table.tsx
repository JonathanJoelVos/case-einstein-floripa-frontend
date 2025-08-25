import * as React from "react"
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { Table, TableHeader, TableHead, TableRow, TableBody, TableCell } from "@/components/ui/table"
import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table"
import { useAnalysesQuery } from "../../hooks/use-analyses-query"
import type { Analysis } from "../../validation/schemas"
import { columnsAnalyses } from "./columns"

export function AnalysesTable() {
    const { data, loading, error } = useAnalysesQuery({ page: 1, perPage: 50 })
    const items = data?.items ?? []

    const table = useReactTable<Analysis>({
        data: items,
        columns: columnsAnalyses,
        getRowId: (row) => row.id,
        getCoreRowModel: getCoreRowModel(),
    })

    const ids = React.useMemo(() => items.map(i => i.id), [items])

    return (
        <div className="px-4">


            <div className="overflow-hidden rounded-lg border">
                <Table>
                    <TableHeader className="bg-muted sticky top-0 z-10">
                        {table.getHeaderGroups().map((hg) => (
                            <TableRow key={hg.id}>
                                {hg.headers.map((h) => (
                                    <TableHead key={h.id}>
                                        {h.isPlaceholder ? null : flexRender(h.column.columnDef.header, h.getContext())}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>

                    <TableBody>
                        {loading && <div className="p-4 text-sm text-muted-foreground">Carregando…</div>}
                        {error && <div className="p-4 text-sm text-red-500">{error}</div>}
                        <SortableContext items={ids} strategy={verticalListSortingStrategy}>
                            {table.getRowModel().rows.map((row) => (
                                <TableRow key={row.id}>
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </SortableContext>

                        {!items.length && !loading && (
                            <TableRow>
                                <TableCell colSpan={columnsAnalyses.length} className="h-24 text-center">
                                    Nenhum resultado.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
