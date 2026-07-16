<script setup lang="ts">
import { useExpensesStore } from '@/stores/ExpensesStore'
const expenseStore = useExpensesStore()

function formatAmount(amount: number): string {
  return `$${amount.toFixed(2)}`
}

function deleteExpense(index: number) {
  expenseStore.expenses.splice(index, 1)
}
</script>

<template>
  <div class="expense-container">
    <h2 class="list-title">Expenses</h2>
    <ul class="expense-list">
      <li class="expense-item" v-for="(expense, index) in expenseStore.totalExpenses" :key="index">
        <span>
          {{ expense.description }} | {{ formatAmount(expense.amount) }} |
          {{ expense.account }}</span
        >
        <button @click="deleteExpense(index)">Delete</button>
        <br />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.expense-container {
  padding: 2rem;
  background-color: #18181b;
  border-radius: 12px;
  border: 1px solid #3f3f46;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
}

.list-title {
  margin: 0 0 1.5rem 0;
  color: #e4e4e7;
  font-size: 1.35rem;
  font-weight: 600;
}

.expense-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.expense-item {
  padding: 14px 16px;
  background-color: #27272a;
  border-radius: 8px;
  border: 1px solid #3f3f46;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  transition: all 0.2s ease;
}

.expense-item:hover {
  background-color: #323238;
  border-color: #52525b;
  transform: translateX(4px);
}

.expense-item .info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.expense-item .description {
  font-weight: 500;
  color: #e4e4e7;
}

.expense-item .category {
  font-size: 0.85rem;
  color: #a1a1aa;
}

.expense-item .amount {
  font-weight: 600;
  font-size: 1.1rem;
  text-align: right;
}

.expense-item .amount.positive {
  color: #4ade80;
}

.expense-item .amount.negative {
  color: #f87171;
}

/* Empty state */
.expense-list:empty::before {
  content: 'No entries yet...';
  display: block;
  text-align: center;
  padding: 3rem 1rem;
  color: #52525b;
  font-style: italic;
}
</style>
