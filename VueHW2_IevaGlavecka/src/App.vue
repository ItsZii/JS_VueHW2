<template>
  <div id="app" :class="{ 'body-logged-out': !useStore().user.isLoggedIn }">
    <div :class="{ 'header-logged-in': useStore().user.isLoggedIn, 'header-logged-out': !useStore().user.isLoggedIn }">
      <header-component></header-component>
    </div>
    
    <div class="content-container">
      <div class="nav-container" v-if="useStore().user.isLoggedIn">
        <nav-component v-if="useStore().user.isLoggedIn"></nav-component>
      </div>
      <div class="main-container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
import NavComponent from './components/NavComponent.vue';
import { useStore } from './store/globalStore';
</script>

<style>
body{
    margin: 0;
    padding: 0;
    background-color: #191621;
}

.body-logged-out {
  background-image: url('@/images/landing_bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
}

.header-logged-in {
  border-bottom: 1px solid #916DDC;
  background: rgb(134, 69, 232)
}

.header-logged-out {
  border-bottom: 1px solid #916DDC;
  background: rgba(8, 2, 16, 0.5);
}

.content-container {
  display: flex;
  min-height: 91.5vh;
}

.nav-container {
  flex: 1;
  border-right: 1px solid #544F69;
background: #22202B;
  z-index: 0;
}

/* Navigation styles */
.navigation {
  color: white;
  padding: 60px 70px;
  width: 100%;
  text-align: center;
}

/* Main content styles */
.main-container {
  flex: 1;
  flex-basis: 75%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
  margin-left: 40px;
}

/* Additional styling for navigation */
.loggedIn-content {
  background-color: '#7E58D0';
}
</style>
