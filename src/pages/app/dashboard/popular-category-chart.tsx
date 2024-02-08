import { PieChart as PieChartIcon } from 'lucide-react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import colors from 'tailwindcss/colors'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const COLORS = [
  colors.sky[500],
  colors.amber[500],
  colors.violet[500],
  colors.emerald[500],
  colors.rose[500],
]

export function PopularCategoryChart() {
  const popularCategories = [
    { category: 'Alimentação', amount: 3817 },
    { category: 'Transporte', amount: 2450 },
    { category: 'Lazer', amount: 500 },
    { category: 'Moradia', amount: 2000 },
    { category: 'Telecomunicação', amount: 300 },
  ]

  return (
    <Card className="col-span-3">
      <CardHeader className="pb-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">
            Despesas por categoria
          </CardTitle>
          <PieChartIcon className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        {popularCategories && (
          <ResponsiveContainer width="100%" height={240}>
            <PieChart style={{ fontSize: 12 }}>
              <Pie
                data={popularCategories}
                dataKey={'amount'}
                nameKey={'category'}
                cx={'50%'}
                cy={'50%'}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                labelLine={false}
                label={({ name, percent }) =>
                  `${name.substring(0, 10)}... (${(percent * 100).toFixed(0)}%)`
                }
              >
                {popularCategories.map((_, index) => {
                  return (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                      className="stroke-background hover:opacity-80"
                    />
                  )
                })}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  )
}
