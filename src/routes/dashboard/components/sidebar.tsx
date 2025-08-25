import { IconReport } from "@tabler/icons-react"

import { NavDocuments } from "@/routes/dashboard/components/nav-documents"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import LogoSVG from "@/assets/logo.svg"
import type { ComponentProps } from "react"

const data = {
  documents: [
    {
      name: "Currículos",
      url: "#",
      icon: IconReport,
    },
  ],
}

export function DashboardSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <img src={LogoSVG} className="w-32" />
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavDocuments items={data.documents} />
      </SidebarContent>
      <SidebarFooter>
      </SidebarFooter>
    </Sidebar>
  )
}
