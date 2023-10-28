<template>
  <div class="header">
    <div class="nav-left">
      <img class="logo" src="@/assets/logo.svg" alt="Logo" />
      <span class="brand">KRAKEN.FM</span>
    </div>
    <div class="nav-right">
      <div v-if="useStore().user.loginUser">
        <div class="avatar"></div>
        <p>{{ fullName }}</p>
        <button @click="handleLogout">LOGOUT</button>
      </div>
      <div v-else>
        <button @click="handleLogin">LOGIN</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from '../store/globalStore';
import { watchEffect } from 'vue';

const fullName = ref('');

watchEffect(() => {
  fullName.value = `${useStore().user.firstName} ${useStore().user.lastName}`;
});

const handleLogin = () => {
  const confirmed = window.confirm('Do you want to log in?');
  if (confirmed) {
    useStore().loginUser();
  }
};

const handleLogout = () => {
  const confirmed = window.confirm('Do you want to log out?');
  if (confirmed) {
    useStore().logoutUser();
  }
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 10px 20px;
  flex-shrink: 0;
  border-bottom: 1px solid #916DDC;
  background: rgba(8, 2, 16, 0.50);
}

.nav-left {
  display: flex;
  align-items: center;
}

.logo {
  width: 51px;
  height: 51px;
  margin-left: 20px;
  margin-right: 10px;
}

.brand {
  color: #FFF;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
}

.nav-right {
  display: flex;
  align-items: center;
}

button {
  cursor: pointer;
  background-color: #7E58D0;
  color: #1C073A;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  padding: 8px 16px;
  border-radius: 50px;
  margin-left: 10px;
}

button:hover,
button:hover {
  background-color: #986ef3;
  border-color: white;
}

.user-info {
  display: flex;
  align-items: center;
  margin-right: 10px;
  position: relative;
  border-right: 1px solid white; /* Add border between user's name and logout button */
  padding-right: 10px;

}

.user-info::before {
  content: "";
  display: block;
  width: 30px;
  height: 30px;
  border: 1px solid white;
  border-radius: 50%;
  margin-right: 15px;
  background-color: #023467;
}
</style>
