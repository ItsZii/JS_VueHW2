<template>
  <div class="landing">
    <div class="content">
      <h1>WE <span class="love-text">LOVE</span> MUSIC</h1>
      <p>
        POWERED BY <span class="spotify-text">SPOTIFY API</span>
      </p>
      <p>
        
      </p>
    </div>
  </div>
</template>

<script>
export default {
  // You can add any component-specific logic here if needed
};
</script>

<style scoped>
.landing {
  padding: 130px;
}
.content {
  max-width: 300px;
}
.landing h1 {
  color: #FFF;
  font-family: Inter;
  font-size: 128px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin-bottom: 8px;
}
.landing p {
  color: #544F69;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 8px;
}
.landing button {
  font-size: 18px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.landing button:hover {
  background-color: #0056b3;
}

.love-text {
  color: #FB0048;
  font-family: Inter;
  font-size: 128px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
}

.spotify-text {
  color: #67FF64;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>
