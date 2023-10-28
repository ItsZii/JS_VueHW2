<template>
    <div>
      <button :class="{ active: useGlobalStore().songFilter === 'none' }" @click="setFilter('none')">None</button>
      <button :class="{ active: useGlobalStore().songFilter === 'name' }" @click="setFilter('name')">Name</button>
      <button :class="{ active: useGlobalStore().songFilter === 'artist' }" @click="setFilter('artist')">Artist</button>
    </div>
  </template>
  
  <script setup>
  import { useStore } from '../store/globalStore';
  
  const setFilter = (filter) => {
    useStore().setSongFilter(filter);
  };
  </script>
  
  <style scoped>
  .active {
    font-weight: bold; /* Style for active filter button */
  }
  </style>
  