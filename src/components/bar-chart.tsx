    "use client"

    import { Bar, BarChart as RechartsBarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"
    import { ChartContainer } from "@/components/ui/chart"

    const data = [
    { name: "Ene", value: 400 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 200 },
    { name: "Abr", value: 278 },
    { name: "May", value: 189 },
    { name: "Jun", value: 239 },
    ]

    export function BarChart() {
    return (
        <ChartContainer
        config={{
            value: {
            label: "Ingresos",
            color: "hsl(var(--chart-1))",
            },
        }}
        className="h-[300px] w-full"
        >
        <ResponsiveContainer width="100%" height="100%">
            <RechartsBarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} />
            </RechartsBarChart>
        </ResponsiveContainer>
        </ChartContainer>
    )
    }

