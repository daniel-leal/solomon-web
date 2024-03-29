import { FileSpreadsheet, Filter, Plus } from 'lucide-react'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

import { Pagination } from '@/components/pagination'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Sheet, SheetTrigger } from '@/components/ui/sheet'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { TransactionSheetFilters } from './transaction.sheet-filters'
import { TransactionTableFilters } from './transaction-table-filters'
import { TransactionTableRow } from './transaction-table-row'

interface Transaction {
  data: {
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
  }[]
  meta: {
    total: number
  }
}

interface TransactionTableRowProps {
  transactions: Transaction
}

const result: TransactionTableRowProps = {
  transactions: {
    data: [
      {
        description: 'Salário BHub',
        transaction_id: '123456',
        is_fixed: true,
        is_revenue: true,
        date: '2024-02-29',
        kind: 'pix',
        category: 'Salário',
        amount: 1000,
      },
      {
        description: 'Supermercado Formosa',
        transaction_id: '654654',
        date: '2024-02-02',
        is_fixed: false,
        is_revenue: false,
        kind: 'crédito',
        category: 'Alimentação',
        amount: 500,
        credit_card: 'Nubank',
      },
      {
        description: 'Supermercado Formosa',
        transaction_id: '2143asfd',
        date: '2024-01-01',
        is_fixed: false,
        is_revenue: false,
        kind: 'crédito',
        category: 'Alimentação',
        amount: 500,
        credit_card: 'Nubank',
      },
      {
        description: 'Supermercado Formosa',
        transaction_id: 'xvbvxcb',
        date: '2024-02-01',
        is_fixed: false,
        is_revenue: false,
        kind: 'crédito',
        category: 'Alimentação',
        amount: 500,
        credit_card: 'Nubank',
      },
      {
        description: 'Gasolina - Ipiranga',
        transaction_id: '134dfd',
        date: '2024-12-01',
        is_fixed: false,
        is_revenue: false,
        kind: 'crédito',
        category: 'Transporte',
        amount: 1500,
        credit_card: 'Inter',
      },
      {
        description: 'Supermercado Formosa',
        transaction_id: 'hhhgasddf',
        date: '2024-02-01',
        is_fixed: false,
        is_revenue: false,
        kind: 'crédito',
        category: 'Alimentação',
        amount: 458,
        credit_card: 'Bradesco Infinite',
      },
    ],
    meta: {
      total: 4458,
    },
  },
}

export function Transactions() {
  return (
    <>
      <Helmet title="Transações" />
      <div className="flex flex-col gap-3">
        <div className="pb-5 text-3xl font-bold tracking-tight text-emerald-700 dark:text-emerald-600">
          Transações
        </div>

        <div className="flex flex-row justify-between gap-4">
          <div className="flex flex-row items-baseline gap-2">
            <Select defaultValue="5">
              <SelectTrigger className="flex-grow">
                <SelectValue></SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="15">15</SelectItem>
                  <SelectItem value="30">30</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <span className="text-nowrap text-xs text-muted-foreground">
              registros por página
            </span>
          </div>

          <div className="flex flex-row gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" type="button">
                  <Filter className="mr-2 h-4 w-4" />
                  Filtros
                </Button>
              </SheetTrigger>

              <TransactionSheetFilters />
            </Sheet>

            <Button variant="outline" type="button">
              <FileSpreadsheet className="mr-2 h-4 w-4" />
              Exportar
            </Button>

            <Button type="button">
              <Plus className="mr-2 h-4 w-4" />
              Nova transação
            </Button>
          </div>
        </div>

        <div className="space-y-5">
          <div className="rounded-md border">
            <Table>
              <TableHeader className="bg-stone-100  dark:bg-stone-900">
                <TableRow>
                  <TableHead className="w-[64px]"></TableHead>
                  <TableHead className="font-bold">Descrição</TableHead>
                  <TableHead className="w-[160px] font-bold">Tipo</TableHead>
                  <TableHead className="w-[240px] font-bold">
                    Categoria
                  </TableHead>
                  <TableHead className="w-[240px] font-bold">Data</TableHead>
                  <TableHead className="w-[200px] font-bold">Valor</TableHead>
                  <TableHead className="w-[132px] font-bold"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {result.transactions.data.map((transaction) => {
                  return (
                    <TransactionTableRow
                      key={transaction.transaction_id}
                      transaction={transaction}
                    />
                  )
                })}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell className="font-semibold" colSpan={5}>
                    Total
                  </TableCell>
                  <TableCell>
                    {result.transactions.meta.total.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </TableCell>
                  <TableCell />
                </TableRow>
              </TableFooter>
            </Table>
          </div>

          <Pagination
            onPageChange={() => {
              Promise<void>
            }}
            pageIndex={0}
            perPage={10}
            totalCount={200}
          />
        </div>
      </div>
    </>
  )
}
