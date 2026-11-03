import { defineStore } from 'pinia'
import type { Expense } from '@/types/Expense'

const API = 'http://localhost:3000/expenses'

export const useExpensesStore = defineStore('expenses', {
  state: () => ({
    expenses: [] as Expense[],
    loading: false,
    error: null as string | null,
  }),

  getters: {
    totalExpenses: (state) => state.expenses,

    totalExpenseAmount: (state) =>
      state.expenses
        .filter((e) => e.type === 'Expense')
        .reduce((sum, e) => sum + e.amount, 0),

    totalIncomeAmount: (state) =>
      state.expenses
        .filter((e) => e.type === 'Income')
        .reduce((sum, e) => sum + e.amount, 0),
  },

  actions: {
    async fetchExpenses() {
      this.loading = true
      this.error = null
      try {
        const res = await fetch(API)
        if (!res.ok) throw new Error(`Failed to load expenses (${res.status})`)
        this.expenses = await res.json()
      } catch (err) {
        this.error = err instanceof Error ? err.message : 'Unknown error'
        console.error(err)
      } finally {
        this.loading = false
      }
    },

    async addExpense(expense: Expense) {
      this.error = null
      try {
        const res = await fetch(API, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(expense),
        })
        if (!res.ok) throw new Error(`Failed to create expense (${res.status})`)
        const created: Expense = await res.json()
        this.expenses.push(created)
      } catch (err) {
        this.error = err instanceof Error ? err.message : 'Unknown error'
        console.error(err)
        throw err
      }
    },

    async deleteExpense(id: number) {
      this.error = null
      try {
        const res = await fetch(`${API}/${id}`, { method: 'DELETE' })
        if (!res.ok) throw new Error(`Failed to delete expense (${res.status})`)
         this.expenses = this.expenses.filter((e) => e.id !== id)
      } catch (err) {
        this.error = err instanceof Error ? err.message : 'Unknown error'
        console.error(err)
      }
    },
  },
})
