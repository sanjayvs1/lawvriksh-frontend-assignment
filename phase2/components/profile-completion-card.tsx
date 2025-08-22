"use client"

import * as React from "react"
import { CheckCircle2, Scale, BookOpen, Briefcase } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"

export function ProfileCompletionCard() {
  const [reduced, setReduced] = React.useState(false)
  React.useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => setReduced(mql.matches)
    update()
    mql.addEventListener("change", update)
    return () => mql.removeEventListener("change", update)
  }, [])

  const progress = 70
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          <CardDescription>Complete Your Profile</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Want to become Verified so that you can publish Articles And Research Papers?
          </p>
          <p className="text-sm font-medium text-blue-600">Get done your KYC Verification Now!</p>
          <div className="pt-1">
            <p className="text-sm font-semibold text-amber-600">{progress}% of Profile Completed</p>
            <div
              className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={progress}
              aria-label="Profile completion"
            >
              <div
                className={
                  "h-2 rounded-full bg-amber-500 " +
                  (reduced ? "" : "transition-all duration-500 ease-in-out")
                }
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
