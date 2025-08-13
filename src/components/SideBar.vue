<script setup lang="ts"></script>

<template>
  <div class="sidebar background">
    <h2>Minuman Yukk</h2>
    <img src="../assets/icons/minumanyokk_logo-circle.png" alt="Logo" class="logo my-12" />
    <h3>Menu</h3>
    <ul>
      <li><button>Our Signature</button></li>
      <li><button>Coffee</button></li>
      <li><button>Tea</button></li>
      <li><button>Juice</button></li>
    </ul>
    <button class="addtocart">Keranjang</button>
  </div>
</template>
<style scoped>
.sidebar {
  padding: 1rem;
  border-right: 1px solid var(--color-border);
  background-color: brown;
  height: 100%;
  width: 150px;
}

.sidebar h2 {
  margin-bottom: 1rem;
  font-size: 1rem;
  font-style: bold;
  font-family: 'Courier New', Courier, monospace;
}
.sidebar h3 {
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-style: bold;
  font-family: 'Courier New', Courier, monospace;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  margin-bottom: 1rem;
}

.sidebar a {
  color: var(--color-text);
  text-decoration: none;
}

.sidebar a:hover {
  text-decoration: underline;
}

.sidebar .addtocart {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  /* background-color: var(--color-primary); */
  background-color: black;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  width: 100%;
}

.sidebar button {
  /* margin-top: 1rem; */
  padding: 0.5rem 1rem;
  /* background-color: var(--color-primary); */
  background-color: black;
  color: white;
  border: none;
  border-radius: 0.25rem;
  width: 100%;
}
</style>
