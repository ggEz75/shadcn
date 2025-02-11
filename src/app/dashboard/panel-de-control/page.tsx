    import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
    import { BarChart } from "@/components/bar-chart"
    import { PieChart } from "@/components/pie-chart"
    import { StatCard } from "@/components/stat-card"

    export default function Dashboard() {
    return (
        <div className="p-4 md:p-8 space-y-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <StatCard title="Usuarios Totales" value="1,234" trend="+5.2%" />
            <StatCard title="Ingresos" value="$12,345" trend="+10.3%" />
            <StatCard title="Conversión" value="3.42%" trend="-0.5%" trendDirection="down" />
            <StatCard title="Sesiones" value="5,678" trend="+2.1%" />
        </div>
        <div className="grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-2">
            <Card>
            <CardHeader>
                <CardTitle>Ventas por Categoría</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
                <PieChart />
            </CardContent>
            </Card>
            <Card>
            <CardHeader>
                <CardTitle>Ingresos Mensuales</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
                <BarChart />
            </CardContent>
            </Card>
        </div>
        </div>
    )
    }
