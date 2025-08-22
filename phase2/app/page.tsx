import { Search } from "lucide-react";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { ActivityCard } from "@/components/activity-card";
import { HeroBanner } from "@/components/hero-banner";
import { ProfileCompletionCard } from "@/components/profile-completion-card";
import { SubscribersTable } from "@/components/subscribers-table";
import { ProfileCard } from "@/components/profile-card";

export default function Home() {
  return (
    <>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-4 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <div className="flex flex-1 items-center">
            <div className="w-full max-w-lg ml-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search Anything.."
                  className="pl-10 bg-muted/50 border-0 focus-visible:ring-1 rounded-full"
                />
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {/* Left area: Hero + Activity */}
            <div className="md:col-span-2 xl:col-span-2 space-y-4 min-w-0">
              <HeroBanner />
              <ActivityCard />
            </div>
            {/* Middle column: Profile completion + Subscribers */}
            <div className="md:col-span-1 xl:col-span-1 space-y-4 min-w-0">
              <ProfileCompletionCard />
              <SubscribersTable />
            </div>
            {/* Right column: Profile card */}
            <div className="md:col-span-1 xl:col-span-1 min-w-0">
              <ProfileCard />
            </div>
          </div>
        </div>
      </SidebarInset>
    </>
  );
}
