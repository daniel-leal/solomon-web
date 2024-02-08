import { Helmet } from 'react-helmet-async'

import { DiffRevenueExpenseCard } from './diff-revenue-expense-card'
import { MonthExpenseCard } from './month-expense-card'
import { MonthFixedExpenseCard } from './month-fixed-expense-card'
import { MonthRevenueCard } from './month-revenue-card'
import { MonthVariableExpenseCard } from './month-variable-expense-card'
import { PopularCategoryChart } from './popular-category-chart'
import { RevenueExpenseChart } from './revenue-expense-chart'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-5 gap-4">
          <MonthRevenueCard />
          <MonthExpenseCard />
          <DiffRevenueExpenseCard />
          <MonthFixedExpenseCard />
          <MonthVariableExpenseCard />
        </div>

        <div className="grid grid-cols-9 gap-4">
          <RevenueExpenseChart />
          <PopularCategoryChart />
        </div>
      </div>
    </>
  )
}
