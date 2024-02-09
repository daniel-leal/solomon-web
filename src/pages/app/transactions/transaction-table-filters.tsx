import { startOfMonth } from 'date-fns'
import { Search, X } from 'lucide-react'
import { useState } from 'react'
import { DateRange } from 'react-day-picker'

import { Button } from '@/components/ui/button'
import { DateRangePicker } from '@/components/ui/date-range-picker'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface TransactionTableFltersProps {
  visible: boolean
}

export function TransactionTableFilters({
  visible,
}: TransactionTableFltersProps) {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: startOfMonth(new Date()),
    to: new Date(),
  })

  return (
    <>
      {visible && (
        <form className="flex flex-col gap-4">
          <div className="flex flex-row gap-4">
            <DateRangePicker date={dateRange} onDateChange={setDateRange} />
            <Select>
              <SelectTrigger className="flex-grow">
                <SelectValue placeholder="Tipos" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="all">Todos tipos</SelectItem>
                  <SelectItem value="credit">Cartão de Crédito</SelectItem>
                  <SelectItem value="debit">Cartão de Débito</SelectItem>
                  <SelectItem value="pix">PIX</SelectItem>
                  <SelectItem value="cash">Dinheiro</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="flex-grow">
                <SelectValue placeholder="Cartões de crédito" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="all">Todos os cartões</SelectItem>
                  <SelectItem value="nubank">Nubank</SelectItem>
                  <SelectItem value="itau">Itaú Click</SelectItem>
                  <SelectItem value="visa">Visa Infinity</SelectItem>
                  <SelectItem value="inter">Inter</SelectItem>
                  <SelectItem value="porto">Porto Seguro</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="flex-grow">
                <SelectValue placeholder="Classificação" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="all">Todas as classificações</SelectItem>
                  <SelectItem value="revenue">Receita</SelectItem>
                  <SelectItem value="expense">Despesa</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="flex-grow">
                <SelectValue placeholder="Recorrência" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="all">Todas as recorrências</SelectItem>
                  <SelectItem value="fixed">Fixa</SelectItem>
                  <SelectItem value="variable">Variável</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="flex-grow">
                <SelectValue placeholder="Categorias" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="all">Todas categorias</SelectItem>
                  <SelectItem value="fixed">Transporte</SelectItem>
                  <SelectItem value="alimentacao">Alimentação</SelectItem>
                  <SelectItem value="moradia">Moradia</SelectItem>
                  <SelectItem value="lazer">Lazer</SelectItem>
                  <SelectItem value="utensilios">Utensílios</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-row justify-between gap-4">
            <div className="flex flex-row items-baseline gap-4">
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
              <span className="text-nowrap text-sm text-muted-foreground">
                registros por página
              </span>
            </div>

            <div className="flex gap-4">
              <Button variant="secondary" type="submit">
                <Search className="mr-2 h-4 w-4" />
                Filtrar resultados
              </Button>

              <Button variant="outline" type="button">
                <X className="mr-2 h-4 w-4" />
                Remover filtros
              </Button>
            </div>
          </div>
        </form>
      )}
    </>
  )
}
