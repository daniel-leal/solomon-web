import { BarChart3 } from 'lucide-react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function RevenueExpenseChart() {
  const chartData = [
    { month: 'ago', expense: 11940, revenue: 12576 },
    { month: 'set', expense: 12888, revenue: 12576 },
    { month: 'out', expense: 10300, revenue: 12576 },
    { month: 'nov', expense: 15480, revenue: 12576 },
    { month: 'dez', expense: 22540.14, revenue: 12576 },
    { month: 'jan', expense: 8800.15, revenue: 12000 },
  ]

  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receitas x Despesas
          </CardTitle>
          <CardDescription>Últimos 6 meses</CardDescription>
        </div>
        <BarChart3 className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        {chartData && (
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={chartData} style={{ fontSize: 12 }}>
              <CartesianGrid vertical={false} className="stroke-muted" />
              <XAxis
                dataKey="month"
                stroke="#888"
                tickLine={false}
                axisLine={false}
                dy={10}
              />
              <YAxis
                stroke="#888"
                axisLine={false}
                tickLine={false}
                width={80}
                tickFormatter={(value: number) =>
                  value.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })
                }
              />
              <Tooltip
                cursor={{ fill: 'transparent' }}
                contentStyle={{
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  fontSize: '12px',
                  borderRadius: '4px',
                  border: 'none',
                  color: '#fff',
                }}
              />
              <Bar dataKey="revenue" name="Receitas" fill={colors.teal[600]} />
              <Bar dataKey="expense" name="Despesas" fill={colors.rose[600]} />
            </BarChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  )
}
