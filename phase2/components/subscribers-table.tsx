"use client"

import { Users, Eye } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"

interface Subscriber {
  id: number
  name: string
  avatar: string
  initials: string
  joinDate: string
}

export function SubscribersTable() {
  const subscribers: Subscriber[] = [
    { id: 1, name: "Prabhjot Jaswal", avatar: "", initials: "PJ", joinDate: "11-08-2025" },
    { id: 2, name: "Deepak Kumar", avatar: "", initials: "DK", joinDate: "11-08-2025" },
    { id: 3, name: "Sahil Saurav", avatar: "", initials: "SS", joinDate: "11-08-2025" },
    { id: 4, name: "Deepak Kumar", avatar: "", initials: "DK", joinDate: "11-08-2025" },
    { id: 5, name: "Prabhjot Jaswal", avatar: "", initials: "PJ", joinDate: "11-08-2025" },
    { id: 6, name: "Sahil Saurav", avatar: "", initials: "SS", joinDate: "11-08-2025" },
    { id: 7, name: "Deepak Kumar", avatar: "", initials: "DK", joinDate: "11-08-2025" },
    { id: 8, name: "Prabhjot Jaswal", avatar: "", initials: "PJ", joinDate: "11-08-2025" },
    { id: 9, name: "Sahil Saurav", avatar: "", initials: "SS", joinDate: "11-08-2025" },
    { id: 10, name: "Deepak Kumar", avatar: "", initials: "DK", joinDate: "11-08-2025" },
  ]

  return (
    <Card className="min-w-0">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between min-w-0">
          <div className="flex items-center gap-2 min-w-0">
            <Users className="h-4 w-4 text-muted-foreground" />
            <CardDescription className="truncate">Subscribers</CardDescription>
          </div>
          <Button variant="ghost" size="sm" className="h-7 px-2 text-muted-foreground shrink-0">
            <Eye className="h-4 w-4 mr-1" />
            <span className="hidden sm:inline">See Details</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <div className="grid grid-cols-2 gap-4 pb-2 border-b text-xs text-muted-foreground">
          <div>Name</div>
          <div className="text-right md:text-left">Date of Joining</div>
        </div>
        <div className="divide-y">
          {subscribers.map((subscriber) => (
            <button
              key={subscriber.id}
              className="grid grid-cols-2 gap-4 items-center py-3 w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md hover:bg-muted/50 transition-colors duration-150 ease-out active:scale-[0.995]"
            >
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={subscriber.avatar} alt={subscriber.name} />
                  <AvatarFallback className="text-xs bg-muted">{subscriber.initials}</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">{subscriber.name}</span>
              </div>
              <div className="text-sm text-muted-foreground text-right md:text-left">{subscriber.joinDate}</div>
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
