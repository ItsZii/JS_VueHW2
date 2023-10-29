<template>
  <div>
    <div class="form">
      <label>First name</label>
      <input v-model="user.firstName" :disabled="isDisabled" @input="updateFullName" />

      <label>Last name</label>
      <input v-model="user.lastName" :disabled="isDisabled" @input="updateFullName" />

      <label>Student code</label>
      <input v-model="user.studentCode" :disabled="isDisabled" />
    </div>
    <div>
      <label>Logged in at</label>
      <div v-if="user.loggedInAt.length">
        <div class="loginTimes" v-for="timestamp in user.loggedInAt.slice().reverse()" :key="timestamp">
          {{ timestamp }}
        </div>
      </div>
      <div v-else>No login records available</div>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue';
import { useStore } from '../store/globalStore';

export default {
  props: {
    isDisabled: Boolean,
  },
  setup(props) {
    const { user, updateFullName } = useStore();

    // Watch for changes in user data and update full name accordingly
    watch(() => [user.firstName, user.lastName], () => {
      // Your logic to update full name
    });

    return {
      user,
    };
  },
};
</script>

<style>
.loginTimes{
  color: #544F69;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
label {
  color: rgba(255, 255, 255, 0.50);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 10px; /* Add margin-bottom to create space between label and input */
  display: block; /* Set display to block to force each label to a new line */
}

input {
  width: 366px;
  height: 42px;
  border-radius: 4px;
  background: #464157;
  margin-bottom: 20px; /* Add margin-bottom to create space between input fields */
  display: block; /* Set display to block to force each input to a new line */
  color: #FFF;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-left: 20px;
}
input:disabled {
  background: #22202B;
  color: rgba(255, 255, 255, 0.70);
}

.form{
  margin-bottom: 40px;
}
</style>
