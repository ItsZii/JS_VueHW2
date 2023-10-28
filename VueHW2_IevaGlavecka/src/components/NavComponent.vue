<template>
  <nav>
    <router-link to="/home" :class="{ active: $route.path === '/home' }">HOME</router-link>
    <router-link to="/about-me" :class="{ active: $route.path === '/about-me' }">ABOUT ME</router-link>
  </nav>
</template>

<style scoped>
.navigation {
  color: white;
  padding: 10px;
  text-align: left;
}

.navigation button {
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  margin-bottom: 10px; /* Add spacing between buttons */
  text-align: left; /* Align button text to the left */
  width: 350px; /* Make the button fill the container */
  padding: 20px; /* Add padding to the buttons */
  position: relative; /* Position relative for the ::before pseudo-element */
  overflow: hidden; /* Hide overflow for the polygon shape */
}

.navigation button::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background-color: #7E58D0; /* Background color for the selected part */
  clip-path: polygon(0% 0%, 100% 0%, 90% 100%, 0% 100%); /* Polygon shape */
  transition: width 0.3s ease-in-out; /* Transition for animation */
  z-index: -1; /* Place the pseudo-element behind the text */
}

.navigation button.active::before {
  width: 100%; /* Expand the polygon shape for the active button */
}
</style>
