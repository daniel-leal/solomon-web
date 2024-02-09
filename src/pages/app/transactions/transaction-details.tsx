import { useState } from 'react'

import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export interface TransactionDetailsProps {
  open: boolean
}

export function TransactionDetails({ open }: TransactionDetailsProps) {
  const hasInstallments = true

  return (
    <DialogContent className="h-[480px] max-w-screen-md">
      <DialogHeader>
        <DialogTitle>Detalhes da Transação:</DialogTitle>
      </DialogHeader>

      {open && (
        <div className="flex flex-row justify-between gap-x-8">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="text-muted-foreground">
                  Descrição
                </TableCell>
                <TableCell className="text-right font-medium">
                  Viagem SP
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-muted-foreground">Tipo</TableCell>
                <TableCell className="text-right">Crédito</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-muted-foreground">Cartão</TableCell>
                <TableCell className="text-right">Nubank</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-muted-foreground">
                  Categoria
                </TableCell>
                <TableCell className="text-right">Lazer</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-muted-foreground">
                  Recorrência
                </TableCell>
                <TableCell className="text-right">Variável</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-muted-foreground">Data</TableCell>
                <TableCell className="text-right">20/10/2023</TableCell>
              </TableRow>
            </TableBody>

            <TableFooter>
              <TableRow>
                <TableCell>Total</TableCell>
                <TableCell className="text-right">R$ 2.152,22</TableCell>
              </TableRow>
            </TableFooter>
          </Table>

          {hasInstallments && (
            <>
              <Separator orientation="vertical" />

              <ScrollArea className="h-96 overflow-visible">
                <Table className="w-80">
                  <TableHeader>
                    <TableRow>
                      <TableHead>Parcela</TableHead>
                      <TableHead className="text-right">Data</TableHead>
                      <TableHead className="text-right">Valor</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>1</TableCell>
                      <TableCell className="text-right">20/10/2023</TableCell>
                      <TableCell className="text-right font-semibold">
                        R$ 35300,00
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>2</TableCell>
                      <TableCell className="text-right">20/10/2023</TableCell>
                      <TableCell className="text-right font-semibold">
                        R$ 300,00
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>3</TableCell>
                      <TableCell className="text-right">20/10/2023</TableCell>
                      <TableCell className="text-right font-semibold">
                        R$ 300,00
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>4</TableCell>
                      <TableCell className="text-right">20/10/2023</TableCell>
                      <TableCell className="text-right font-semibold">
                        R$ 300,00
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>5</TableCell>
                      <TableCell className="text-right">20/10/2023</TableCell>
                      <TableCell className="text-right font-semibold">
                        R$ 300,00
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>6</TableCell>
                      <TableCell className="text-right">20/10/2023</TableCell>
                      <TableCell className="text-right font-semibold">
                        R$ 300,00
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>7</TableCell>
                      <TableCell className="text-right">20/10/2023</TableCell>
                      <TableCell className="text-right font-semibold">
                        R$ 300,00
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>8</TableCell>
                      <TableCell className="text-right">20/10/2023</TableCell>
                      <TableCell className="text-right font-semibold">
                        R$ 300,00
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>9</TableCell>
                      <TableCell className="text-right">20/10/2023</TableCell>
                      <TableCell className="text-right font-semibold">
                        R$ 300,00
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>10</TableCell>
                      <TableCell className="text-right">20/10/2023</TableCell>
                      <TableCell className="text-right font-semibold">
                        R$ 300,00
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>11</TableCell>
                      <TableCell className="text-right">20/10/2023</TableCell>
                      <TableCell className="text-right font-semibold">
                        R$ 300,00
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>12</TableCell>
                      <TableCell className="text-right">20/10/2023</TableCell>
                      <TableCell className="text-right font-semibold">
                        R$ 300,00
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </ScrollArea>
            </>
          )}
        </div>
      )}
    </DialogContent>
  )
}
