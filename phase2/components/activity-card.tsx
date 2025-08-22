"use client"

import { BarChart3 } from "lucide-react"
import { Line, LineChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

import { ChartTooltip, ChartTooltipContent, ChartContainer } from "@/components/ui/chart"
import { useCountUp } from "@/hooks/use-count-up"

export function ActivityCard() {
  // Enhanced mock data for the chart with more realistic legal practice metrics
  const chartData = [
    { month: "Apr 6", activity: 45, blogs: 2, cases: 1 },
    { month: "Apr 11", activity: 65, blogs: 3, cases: 2 },
    { month: "Apr 16", activity: 35, blogs: 1, cases: 1 },
    { month: "Apr 22", activity: 80, blogs: 4, cases: 3 },
    { month: "Apr 28", activity: 55, blogs: 2, cases: 2 },
    { month: "May 4", activity: 70, blogs: 3, cases: 2 },
    { month: "May 9", activity: 90, blogs: 5, cases: 4 },
    { month: "May 15", activity: 75, blogs: 4, cases: 3 },
    { month: "May 21", activity: 60, blogs: 3, cases: 2 },
    { month: "May 27", activity: 40, blogs: 2, cases: 1 },
    { month: "Jun 2", activity: 85, blogs: 4, cases: 3 },
    { month: "Jun 7", activity: 95, blogs: 5, cases: 4 },
    { month: "Jun 12", activity: 100, blogs: 6, cases: 5 },
    { month: "Jun 18", activity: 78, blogs: 4, cases: 3 },
    { month: "Jun 24", activity: 88, blogs: 5, cases: 4 },
    { month: "Jun 30", activity: 72, blogs: 3, cases: 3 },
  ]

  // KPI placeholders matching the reference
  const totalDaysActive = 24
  const blogsPosted = 100
  const daysCount = useCountUp(totalDaysActive, 320)
  const blogsCount = useCountUp(blogsPosted, 320)

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <BarChart3 className="h-4 w-4 text-muted-foreground" />
          <CardDescription>Active Time</CardDescription>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="text-xl mb-1">Total Active Time and Blogs Posted</CardTitle>
            <CardDescription>From Last 1 Year</CardDescription>
          </div>
          <div className="grid grid-cols-2 gap-4 text-center lg:text-left">
            <div className="rounded-md bg-muted/40 px-4 py-2">
              <p className="text-[11px] text-muted-foreground">Total Days Active</p>
              <p className="text-2xl font-bold">{daysCount} Days</p>
            </div>
            <div className="rounded-md bg-muted/40 px-4 py-2">
              <p className="text-[11px] text-muted-foreground">Blogs Posted</p>
              <p className="text-2xl font-bold">{blogsCount}</p>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="h-52 w-full overflow-hidden relative">
          <ChartContainer
            id="activity"
            className="h-[95%] w-[99%] aspect-auto"
            config={{ activity: { label: "Activity", color: "#9ca3af" } }}
          >
            <LineChart data={chartData} margin={{ top: 0, left: 0, right: 0, bottom: 0 }}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.6} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={6}
                fontSize={11}
                height={30}
              />
              <YAxis hide domain={[0, 'dataMax + 10']} />
              <ChartTooltip
                cursor={{ stroke: '#d1d5db', strokeWidth: 1 }}
                content={<ChartTooltipContent className="backdrop-blur-sm" />}
              />
              <Line dataKey="activity" type="monotone" stroke="#9ca3af" strokeWidth={2} dot={false} />
            </LineChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  )
}
