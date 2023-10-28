import { defineStore } from 'pinia'
import songList from '@/data/songs-list.json'

export const useStore = defineStore({
  id: 'global',
  state: () => ({
    all_songs: songList,
    user: {
      firstName: 'Ieva',
      lastName: 'Glavecka',
      studentCode: 'IT21043',
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
    },
    logoutUser() {
      this.user.isLoggedIn = false
      this.user.loggedInAt = []
    },
    resetUser() {
      this.user.firstName = 'name'
      this.user.lastName = 'surname'
      this.user.studentCode = 'CODE1234'
      this.user.loggedInAt = []
      this.user.isLoggedIn = false
    }
  }
})
