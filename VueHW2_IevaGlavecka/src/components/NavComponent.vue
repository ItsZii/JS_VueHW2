<template>
  <div class="navigation">
    <nav>
      <button @click="navigateTo('/home')" :class="{ active: $route.path === '/home' }">HOME</button>
      <button @click="navigateTo('/about-me')" :class="{ active: $route.path === '/about-me' }">ABOUT ME</button>
    </nav>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateTo = (path) => {
  router.push(path);
};
</script>

<style scoped>
.navigation {
  padding: 10px;
  text-align: left;
  color: #FFF;
  margin-top: 20px;
}

.navigation button {
  background: transparent;
  border: none;
  cursor: pointer;
  margin-bottom: 10px;
  text-align: left;
  width: 350px; 
  padding: 20px;
  position: relative;
  overflow: hidden;
  color: #FFF;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  border-radius: 0px;
}

.navigation button::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background-color: #8645E8;
  clip-path: polygon(0% 0%, 100% 0%, 90% 100%, 0% 100%);
  transition: width 0.3s ease-in-out;
  z-index: -1;
}

.navigation button.active::before {
  width: 95%;
}
</style>
