import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const userStore = defineStore('user', () => {
  const isLogin = ref(false)
    if(localStorage.getItem('token')){
        isLogin.value=true
    }
  const isLoggedIn = computed(() => {
    return isLogin.value
  })

  return {
    isLogin,
    isLoggedIn,
  }
})
