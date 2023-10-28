<template>
    <div>
      <song-filter-component></song-filter-component>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Artist</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="song in sortedSongs" :key="song.id">
            <td>{{ song.name }}</td>
            <td>{{ song.artist }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useStore } from '../store/globalStore';
  
  const sortedSongs = computed(() => {
    const filter = useStore().songFilter;
    const songs = useStore().allSongs.slice();
  
    if (filter === 'name') {
      return songs.sort((a, b) => a.name.localeCompare(b.name));
    } else if (filter === 'artist') {
      return songs.sort((a, b) => a.artist.localeCompare(b.artist));
    } else {
      return songs;
    }
  });
  </script>
  