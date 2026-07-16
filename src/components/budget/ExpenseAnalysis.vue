<script setup lang="ts">
import { useExpensesStore } from '@/stores/ExpensesStore'

const expensesStore = useExpensesStore()

function calculateTotalExpenses() {
  const expenses = expensesStore.expenses
  let total = 0
  for (const expense of expenses) {
    if (expense.type === 'Expense') {
      total += expense.amount
    }
  }
  return total
}

function calculateTotalIncome() {
  const expenses = expensesStore.expenses
  let total = 0
  for (const expense of expenses) {
    if (expense.type === 'Income') {
      total += expense.amount
    }
  }
  return total
}
</script>

<template>
  <div class="summary-container">
    <h2 class="summary-title">Overview</h2>

    <div class="summary-grid">
      <div class="summary-card expenses">
        <div class="label">Total Expenses</div>
        <div class="amount negative">-${{ calculateTotalExpenses().toFixed(2) }}</div>
      </div>

      <div class="summary-card income">
        <div class="label">Total Income</div>
        <div class="amount positive">+${{ calculateTotalIncome().toFixed(2) }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.summary-container {
  padding: 2rem;
  background-color: #18181b;
  border-radius: 12px;
  border: 1px solid #3f3f46;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
}

.summary-title {
  margin: 0 0 1.5rem 0;
  color: #e4e4e7;
  font-size: 1.35rem;
  font-weight: 600;
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}

.summary-card {
  background-color: #27272a;
  border-radius: 8px;
  padding: 1.25rem 1.5rem;
  border: 1px solid #3f3f46;
  transition: transform 0.2s ease;
}

.summary-card:hover {
  transform: translateY(-2px);
}

.label {
  font-size: 0.9rem;
  font-weight: 600;
  color: #a1a1aa;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.5rem;
}

.amount {
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.positive {
  color: #4ade80;
}

.negative {
  color: #f87171;
}

/* Responsive */
@media (max-width: 768px) {
  .summary-grid {
    grid-template-columns: 1fr;
  }
}
</style>
