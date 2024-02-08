import { Search, X } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'

export interface TransactionTableRowProps {
  transaction: {
    transaction_id: string
    description: string
    date?: string | null
    amount: number
    is_fixed: boolean
    is_revenue: boolean
    recurring_day?: number | null
    kind: string
    category: string
    credit_card?: string | null
  }
}

export function TransactionTableRow({ transaction }: TransactionTableRowProps) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  const descriptionColor = transaction.is_revenue
    ? 'text-emerald-700 dark:text-emerald-500'
    : 'text-rose-700 dark:text-rose-500'

  return (
    <TableRow>
      <TableCell>
        <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="h-3 w-3" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>
        </Dialog>
      </TableCell>
      <TableCell className={`light:font-semibold ${descriptionColor}`}>
        {transaction.description}
      </TableCell>

      <TableCell className="font-medium">{transaction.kind}</TableCell>
      <TableCell>{transaction.category}</TableCell>
      <TableCell>
        {transaction.date &&
          new Date(transaction.date).toLocaleDateString('pt-BR')}
      </TableCell>
      <TableCell>
        {transaction.amount.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="xs">
          <X className="mr-2 h-3 w-3" />
          Excluir
        </Button>
      </TableCell>
    </TableRow>
  )
}
