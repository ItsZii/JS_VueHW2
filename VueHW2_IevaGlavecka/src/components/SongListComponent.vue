<template>
  <div>
    <table>
        <tr>
          <th>Name</th>
          <th>Artist</th>
        </tr>
        <tr v-for="song in songs" :key="song.artist">
          <td>{{ song.song }}</td>
          <td>{{ song.artist }}</td>
        </tr>
    </table>
  </div>
</template>

<script>
import { useStore } from '../store/globalStore';

export default {
  computed: {
    songs() {
      return useStore().all_songs;
    }
  }
};
</script>

<style scoped>
body {
  color: white; 
}
th, td {
  color: white;
  text-align: left;
  padding-top: 12px;
  padding-bottom: 10px;
  width: 700px;
}
th{
  border-bottom: 1px solid #464157;
  color: #464157;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
td{
  color: #FFF;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
</style>
  