import { DashboardSidebar } from "@/routes/dashboard/components/sidebar"
import { DashboardHeader } from "@/routes/dashboard/components/header"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"

import { createFileRoute } from "@tanstack/react-router"
import { AnalysesTable } from "./components/table/table"
import { ChartAnalysesTimeseries } from "./components/chart-analyses-timeseries"
import { SectionCards } from "./components/section-cards"

export const Route = createFileRoute('/dashboard/')({
    component: DashboardPage,
})

export default function DashboardPage() {
    return (
        <SidebarProvider
            style={
                {
                    "--sidebar-width": "calc(var(--spacing) * 72)",
                    "--header-height": "calc(var(--spacing) * 12)",
                } as React.CSSProperties
            }
        >
            <DashboardSidebar variant="inset" />
            <SidebarInset>
                <DashboardHeader />
                <div className="flex flex-1 flex-col">
                    <div className="@container/main flex flex-1 flex-col gap-2">
                        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                            <SectionCards />
                            <div className="px-4 lg:px-6">
                                <ChartAnalysesTimeseries />
                            </div>
                            <AnalysesTable />
                        </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
