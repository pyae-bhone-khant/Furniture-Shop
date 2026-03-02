"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Link from "next/link"
import { AlertTriangle } from "lucide-react"

export default function Error({
  reset,
}: {
  reset: () => void
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 p-4">
      <Card className="max-w-md w-full text-center shadow-lg">
        <CardHeader className="items-center">
          <AlertTriangle className="size-10 text-destructive mb-2" />
          <CardTitle className="text-2xl">Something went wrong</CardTitle>
          <CardDescription>
            An unexpected error occurred.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-3">
          <Button onClick={() => reset()} className="w-full">
            Try again
          </Button>

          <Button variant="outline" asChild className="w-full">
            <Link href="/">Go Home</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}