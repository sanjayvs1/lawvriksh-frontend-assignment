"use client"

import * as React from "react"

export function HeroBanner() {
  const [reduced, setReduced] = React.useState(false)
  React.useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => setReduced(mql.matches)
    update()
    mql.addEventListener("change", update)
    return () => mql.removeEventListener("change", update)
  }, [])
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  })

  return (
    <div className={
      "relative rounded-2xl bg-gradient-to-br from-[#1b1c1f] via-[#0f1115] to-[#1b1c1f] p-6 md:p-8 text-white overflow-hidden " +
      (reduced ? "" : "animate-in fade-in-50 slide-in-from-bottom-2")
    }>
      <div className="relative z-10 flex items-center justify-between">
        <h1 className="text-[28px] md:text-[40px] lg:text-[44px] font-light italic font-serif tracking-tight bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
          Hello Prabhjot Jaswal!
        </h1>
        <div className="flex items-center gap-2 text-slate-300 text-sm md:text-base whitespace-nowrap">
          <span className="hidden md:inline">{currentDate}</span>
        </div>
      </div>
    </div>
  )
}
