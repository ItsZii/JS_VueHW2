<template>
  <div>
    <div class="top-container">
      <div class="title">
        <h1>ABOUT ME</h1>
      </div>
      <button @click="toggleEditMode" :class="{ active: editMode }">{{ editMode ? 'CANCEL' : 'EDIT FORM' }}</button>
    </div>
    <router-view :isDisabled="!editMode.valueOf()"></router-view>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  setup() {
    const editMode = ref(false);
    const toggleEditMode = () => {
      editMode.value = !editMode.value;
    };

    // Create a computed property that derives isDisabled from editMode
    const isDisabled = computed(() => !editMode.value);

    return {
      editMode,
      toggleEditMode,
      isDisabled,
    };
  },
};
</script>


<style>
  .top-container {
    display: flex;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 65px;
  }

  button {
    cursor: pointer;
    background-color: #7E58D0;
    text-align: center;
    color: #FFF;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 8px 16px;
    border-radius: 50px;
    margin-left: 10px;
  }

  button:hover,
  button:hover {
    background-color: #8e60f1;
    border-color: white;
  }

  .title {
    display: flex;
    align-items: center;
    margin-right: 10px;
    position: relative;
    height: 50px;
    flex-shrink: 0;

    border-right: 1px solid #544F69;
    padding-right: 10px;
  }
  
  .title > h1 {
    color: #FFF;
    font-family: Inter;
    font-size: 33px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
  }
</style>

