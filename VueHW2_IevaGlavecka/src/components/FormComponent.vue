<template>
    <div>
      <label>First Name</label>
      <input v-model="user.firstName" :disabled="disabled">
      
      <label>Last Name</label>
      <input v-model="user.lastName" :disabled="disabled">
      
      <label>Student Code</label>
      <input v-model="user.studentCode" :disabled="disabled">
      
      <label>Logged in at</label>
      <div v-for="timestamp in user.loggedInAt" :key="timestamp">{{ timestamp }}</div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useStore } from '../store/globalStore';
  
  const user = ref(useStore().user);
  const disabled = ref(true);
  
  watch(() => {
    user.value = { ...useStore().user };
  }, { deep: true });
  
  watch(() => {
    disabled.value = !useStore().editForm;
  }, { immediate: true });
  </script>
  