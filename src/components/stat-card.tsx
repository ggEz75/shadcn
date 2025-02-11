    import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
    import { ArrowDownIcon, ArrowUpIcon } from "lucide-react"

    interface StatCardProps {
    title: string
    value: string
    trend: string
    trendDirection?: "up" | "down"
    }

    export function StatCard({ title, value, trend, trendDirection = "up" }: StatCardProps) {
    return (
        <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="text-2xl font-bold">{value}</div>
            <p className={`text-xs ${trendDirection === "up" ? "text-green-500" : "text-red-500"}`}>
            {trendDirection === "up" ? (
                <ArrowUpIcon className="inline mr-1 h-4 w-4" />
            ) : (
                <ArrowDownIcon className="inline mr-1 h-4 w-4" />
            )}
            {trend}
            </p>
        </CardContent>
        </Card>
    )
    }

