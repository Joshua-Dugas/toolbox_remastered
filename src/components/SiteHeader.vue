<template>
  <header>
    <div>
      <h1>Toolbox 2.0</h1>
      <nav>
        <ol>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/budget">Budget</router-link></li>
        </ol>
      </nav>
    </div>
  </header>
</template>

<style scoped>
/* Places the header at the top of the page and makes the navbar nice and shiny*/
header {
  background-color: #18181b;
  color: #e4e4e7;
  border-bottom: 1px solid #3f3f46;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  height: 64px;
}

header > div {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

h1 {
  margin: 0;
  font-size: 1.55rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: #a1a1aa;
}

h1:hover {
  color: #e4e4e7;
}

nav ol {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

nav li {
  margin: 0;
}

nav a {
  color: #d4d4d8;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 0.85rem;
  border-radius: 6px;
  transition: all 0.2s ease;
}

nav a:hover,
nav a.router-link-active {
  background-color: #27272a;
  color: #fff;
}

nav a.router-link-active {
  color: #22d3ee;
  position: relative;
}

nav a.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background: #22d3ee;
}
</style>
