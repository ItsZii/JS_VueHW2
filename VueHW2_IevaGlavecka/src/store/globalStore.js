import { defineStore } from 'pinia'
import songList from '@/data/songs-list.json'

export const useStore = defineStore({
  id: 'global',
  state: () => ({
    all_songs: songList,
    user: {
      firstName: 'name',
      lastName: 'surname',
      studentCode: 'CODE1234',
      loggedInAt: [],
      isLoggedIn: false
    }
  }),
  actions: {
    loginUser() {
      this.user.isLoggedIn = true
      const timestamp = new Date().toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
      this.user.loggedInAt.push(timestamp)
      localStorage.setItem('user', JSON.stringify(this.user));
    },
    logoutUser() {
      this.user.isLoggedIn = false
    },
    resetUser() {
      this.user.firstName = 'Ieva'
      this.user.lastName = 'Glavecka'
      this.user.studentCode = 'CODE1234'
    },
    toggleFormState() {
      this.user.isFormActive = !this.user.isFormActive;
    },
  }
})
