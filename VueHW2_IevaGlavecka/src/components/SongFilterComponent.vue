<template>
  <div class="filter-buttons">
    <h2>Sorted by: </h2>
    <button @click="filterSongs('none')" :class="{ active: activeFilter === 'none' }">None</button>
    <button @click="filterSongs('name')" :class="{ active: activeFilter === 'name' }">Name</button>
    <button @click="filterSongs('artist')" :class="{ active: activeFilter === 'artist' }">Artist</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from '../store/globalStore';

export default {
  setup() {
    const activeFilter = ref('none'); // Default filter
    const originalSongsOrder = ref([]); // Store the original order of songs

    const store = useStore();

    // Initialize originalSongsOrder with the original order of songs
    originalSongsOrder.value = store.all_songs.slice();

    const filterSongs = (filterType) => {
      activeFilter.value = filterType;

      if (filterType === 'name') {
        store.all_songs.sort((a, b) => a.song.localeCompare(b.song));
      } else if (filterType === 'artist') {
        store.all_songs.sort((a, b) => a.artist.localeCompare(b.artist));
      } else {
        // Reset to original order (None)
        store.all_songs = originalSongsOrder.value.slice();
      }
    };

    return {
      activeFilter,
      filterSongs,
    };
  },
};
</script>


<style scoped>
.filter-buttons {
  display: flex;
  margin-bottom: 20px;
}

.filter-buttons button {
  background: transparent;
  border: none;
  cursor: pointer;
  color: white;
  font-family: Inter;
  font-size: 16px;
  border-radius: 50px;
  padding-left: 20px;
  padding-right: 20px;
}

.filter-buttons button.active {
  background: transparent;
  border: none;
  cursor: pointer;
  color: white;
  font-family: Inter;
  font-size: 16px;
  border-radius: 50px;
  background: rgba(251, 0, 72, 0.20);
  padding-left: 20px;
  padding-right: 20px;
}
h2{
  color: rgba(255, 255, 255, 0.80);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>
