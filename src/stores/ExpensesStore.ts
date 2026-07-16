import { defineStore } from 'pinia'
import type { Expense } from '@/types/Expense'

export const useExpensesStore = defineStore('expenses', {
  state: () => ({
    expenses: [] as Expense[],
  }),
  getters: {
    totalExpenses: (state) => state.expenses,
  },
  actions: {
    addExpense(expense: Expense) {
      this.expenses.push(expense)
      console.log(this.expenses)
    },
  },
})
