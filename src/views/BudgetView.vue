<script setup lang="ts">
import ExpenseEntry from '@/components/budget/ExpenseEntry.vue'
import ExpenseList from '@/components/budget/ExpenseList.vue'
</script>

<template>
  <div class="budget-page">
    <h1 class="page-title">Budget</h1>

    <div class="budget-layout">
      <ExpenseEntry />
      <ExpenseList />
    </div>
  </div>
</template>

<style scoped>
.budget-page {
  padding: 2rem 1.5rem;
  max-width: 1400px;
  margin: 0 auto;
}

.page-title {
  color: #e4e4e7;
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 2.25rem;
  letter-spacing: -0.025em;
}

.budget-layout {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
}

.budget-layout > :first-child {
  flex: 1;
  max-width: 460px;
}

.budget-layout > :last-child {
  flex: 1.35;
}

.expense-container,
.form-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

@media (max-width: 1024px) {
  .budget-layout {
    flex-direction: column;
    gap: 1.75rem;
  }

  .budget-layout > * {
    max-width: 100%;
  }
}
</style>
