<template>
  <div id="app">
    <header-component></header-component>
    <nav-component v-if="useStore().user.loginUser"></nav-component>
    <router-view></router-view>
  </div>
</template>

<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
import NavComponent from './components/NavComponent.vue';
import { useStore } from './store/globalStore';
</script>

<style>
body{
    background-color: #f9f9f9;
    background-image: url('@/images/landing_bg.png');
    background-size:cover; /* This will ensure the image covers the entire container */
    background-position: center; /* Center the background image */
    background-repeat: no-repeat;
}
    
</style>
