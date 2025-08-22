"use client"

import { Home, Settings, User, Scale, Users, HelpCircle, BarChart3 } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { ThemeToggle } from "@/components/theme-toggle"

// Menu items
const navigationItems = [
  {
    title: "Home",
    url: "#",
    icon: Home,
    isActive: true,
  },
  {
    title: "Dashboard", 
    url: "#",
    icon: BarChart3,
    isActive: false,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center gap-3 px-3 py-3">
          <div className="flex aspect-square size-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg">
            <Scale className="size-5" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-bold text-lg">LawVriksh</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs">Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={item.isActive}>
                    <a href={item.url} className="transition-colors hover:bg-sidebar-accent/50">
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-sidebar-border">
        <div className="p-3 space-y-3">
          {/* Support actions above profile */}
          <div className="space-y-1">
            <a href="#" className="flex items-center gap-2 px-2 py-2 rounded-md text-sm hover:bg-sidebar-accent/50 transition-colors">
              <HelpCircle className="size-4" />
              <span>Help</span>
            </a>
            <a href="#" className="flex items-center gap-2 px-2 py-2 rounded-md text-sm hover:bg-sidebar-accent/50 transition-colors">
              <Settings className="size-4" />
              <span>Settings</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex aspect-square size-9 items-center justify-center rounded-lg bg-muted">
              <User className="size-4" />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate">prabhjotjaswal08</span>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

