
import { defineStore } from 'pinia'
import { ILoginInput } from '~/types/repository-types'

interface IAuthState {
  authenticated: boolean;
  access_token: string;
  refresh_token: string;
  user_data: object
}

export const useAuthStore = defineStore({
  id: 'authStore',
  state: (): IAuthState => ({
    authenticated: false,
    access_token: '',
    refresh_token: '',
    user_data: {},
   }),
  persist: {
    storage: persistedState.cookiesWithOptions({ sameSite: 'lax', httpOnly: false, })
  },
  actions: {
    async login(loginData: ILoginInput){
      const response = await useNuxtApp().$api.auth.login(loginData)
      this.access_token = response.data.access_token
      this.refresh_token = response.data.refresh_token
      this.authenticated = true
    },
    async logout() {
      const response = await useNuxtApp().$api.auth.logout()
      this.access_token = ''
      this.refresh_token = ''
      this.authenticated = false
    }
  },
})
