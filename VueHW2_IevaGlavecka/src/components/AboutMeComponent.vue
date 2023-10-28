<template>
    <div>
      <button @click="toggleEditForm">{{ editForm ? 'CANCEL' : 'EDIT FORM' }}</button>
      <form-component :disabled="!editForm"></form-component>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useStore } from '../store/globalStore';
  
  const editForm = ref(false);
  
  const toggleEditForm = () => {
    editForm.value = !editForm.value;
  };
  </script>
  