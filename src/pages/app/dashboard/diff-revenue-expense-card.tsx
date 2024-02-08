import { Diff } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function DiffRevenueExpenseCard() {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Diferença</CardTitle>
        <Diff className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <>
          <span className="text-2xl font-bold tracking-tight">R$ 1.970,00</span>
          <p className="text-xs text-muted-foreground">
            <>
              <span className="text-rose-500 dark:text-rose-400">+1.8%</span> em
              relação ao mês passado
            </>
          </p>
        </>
      </CardContent>
    </Card>
  )
}
