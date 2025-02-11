    "use client"

    import { Cell, Pie, PieChart as RechartsPieChart, ResponsiveContainer, Legend } from "recharts"
    import { ChartContainer } from "@/components/ui/chart"

    const data = [
    { name: "Electrónicos", value: 400 },
    { name: "Ropa", value: 300 },
    { name: "Alimentos", value: 200 },
    { name: "Libros", value: 100 },
    ]

    const COLORS = ["hsl(var(--chart-1))", "hsl(var(--chart-2))", "hsl(var(--chart-3))", "hsl(var(--chart-4))"]

    export function PieChart() {
    return (
        <ChartContainer
        config={{
            ...Object.fromEntries(data.map((entry, index) => [entry.name, { label: entry.name, color: COLORS[index] }])),
        }}
        className="h-[300px] w-full"
        >
        <ResponsiveContainer width="100%" height="100%">
            <RechartsPieChart>
            <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
            >
                {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Legend />
            </RechartsPieChart>
        </ResponsiveContainer>
        </ChartContainer>
    )
    }

