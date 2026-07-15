<template>
  <div class="form-container">
    <form>
      <div class="form-group">
        <label for="type">Type</label>
        <select id="type" name="Type">
          <option value="Expense">Expense</option>
          <option value="Income">Income</option>
        </select>
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" id="description" name="description" placeholder="Phone Bill" />
      </div>

      <div class="form-group">
        <label for="amount">Amount</label>
        <input type="number" id="amount" name="amount" placeholder="0.00" step="0.01" />
      </div>

      <div class="form-group">
        <label for="account">Account / Category</label>
        <select id="account" name="Account">
          <option value="Bills">Bills</option>
          <option value="Savings">Savings</option>
        </select>
      </div>

      <button type="submit" class="submit-btn">Add Transaction</button>
    </form>
  </div>
</template>

<style scoped>
/* Form Styles */
.form-container {
  max-width: 480px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #18181b;
  border-radius: 12px;
  border: 1px solid #3f3f46;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: #a1a1aa;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

input,
select {
  width: 100%;
  padding: 12px 14px;
  background-color: #27272a;
  border: 1px solid #52525b;
  border-radius: 8px;
  color: #e4e4e7;
  font-size: 1rem;
  transition: all 0.2s ease;
}

input:focus,
select:focus {
  outline: none;
  border-color: #22d3ee;
  box-shadow: 0 0 0 3px rgba(34, 211, 238, 0.15);
  background-color: #3f3f46;
}

input::placeholder {
  color: #71717a;
}

.submit-btn {
  width: 100%;
  padding: 14px;
  margin-top: 1rem;
  background-color: #22d3ee;
  color: #18181b;
  font-weight: 700;
  font-size: 1.05rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.submit-btn:hover {
  background-color: #67e8f9;
  transform: translateY(-1px);
  box-shadow: 0 8px 20px rgba(34, 211, 238, 0.3);
}

.submit-btn:active {
  transform: scale(0.98);
}
</style>
