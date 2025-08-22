"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function ProfileCard() {
  return (
    <div className="rounded-xl bg-white dark:bg-card p-0 border border-border overflow-hidden">
      <div className="relative h-40 w-full">
        <div
          aria-hidden="true"
          className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-600/40 via-purple-600/40 to-pink-600/40"
        />
        <svg
          className="absolute inset-0 h-full w-full opacity-30"
          viewBox="0 0 400 160"
          preserveAspectRatio="none"
          role="img"
          aria-label="Decorative banner"
        >
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
              <stop stopColor="#60a5fa" offset="0%" />
              <stop stopColor="#a78bfa" offset="50%" />
              <stop stopColor="#f472b6" offset="100%" />
            </linearGradient>
          </defs>
          <path d="M0,120 Q100,60 200,120 T400,120 V160 H0 Z" fill="url(#g)" />
        </svg>
      </div>
      <div className="-mt-10 px-6">
        <div className="flex justify-center">
          <Avatar className="h-20 w-20 border-4 border-background">
            <AvatarImage src="" alt="Prabhjot Jaswal" />
            <AvatarFallback className="text-lg">PJ</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="px-6 pb-6 pt-4 space-y-5">
        <div className="text-center">
          <h3 className="text-base font-semibold">Prabhjot Jaswal</h3>
          <p className="text-xs text-muted-foreground mt-1">
            LLB(H) complete. Practicing lawyer at MP High court and District and session court Jabalpur
          </p>
        </div>
        <div className="space-y-3">
          <div>
            <p className="text-xs text-muted-foreground">Practice Area</p>
            <div className="mt-1 rounded-lg bg-muted px-3 py-2 text-sm">Corporate Law</div>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Degree</p>
            <div className="mt-1 rounded-lg bg-muted px-3 py-2 text-sm">LLB(H) Complete</div>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Year of Passing</p>
            <div className="mt-1 rounded-lg bg-muted px-3 py-2 text-sm">2022</div>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Bio</p>
            <div className="mt-1 rounded-lg bg-muted px-3 py-2 text-sm">Corporate Law</div>
          </div>
        </div>
      </div>
    </div>
  )
}
