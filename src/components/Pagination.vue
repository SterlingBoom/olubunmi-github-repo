<template>
  <div class="container">
    <div class="repos__pagination">
      <!-- pagination with prev and next buttons -->
      <ul>
        <li>
          <button :disabled="currentPage === 1" class="prev" @click="prev">
            Prev
          </button>
        </li>
        <li v-for="number in pageNumbers" :key="number">
          <button @click="paginate" :class="{ active: currentPage === number }">
            {{ number }}
          </button>
        </li>
        <li>
          <button :disabled="currentPage === pageNumbers.length" @click="next">
            Next
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps([
  'next',
  'prev',
  'paginate',
  'pageNumbers',
  'currentPage',
  'repos',
  'reposPerPage',
])
</script>

<style>
ul {
  display: flex;
  justify-content: center;
}
.button.active {
  background-color: #00d9ff;
}
li {
  list-style: none;
}
button {
  background-color: #1f1f1f;
  border: none;
  cursor: pointer;
  padding: 0.4rem 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: #f1f1f1;
  font-weight: bold;
  cursor: pointer;
  margin: 1px;
  transition: all 0.5s ease;
  /* background-color: blue */
}
button:hover {
  background-color: #00d9ff;
  color: #131313;
}
.prev {
  padding: 0.4rem 1rem;
  border-radius: 5px;
  border: none;
  margin: 1px;
  color: #00d9ff;
  /* background-color: #ccc; */
}
</style>
