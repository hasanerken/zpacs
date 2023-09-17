<template>
  <div>
    {{ authStore.authenticated }}
  </div>
  <NSpace align="center" class="">
    <NForm :model="form" inline>
      <NFormItem label="Username">
        <NInput v-model:value="form.username" placeholder="Username" />
      </NFormItem>
      <NFormItem label="Password">
        <NInput v-model:value="form.password" placeholder="Password" />
      </NFormItem>
      <NFormItem>
        <NButton :loading="isLoginLoading" type="primary" class="" @click="handleLogin">
          <template #icon>
            <PhSignIn />
          </template>
          Login
        </NButton>
      </NFormItem>
    </NForm>
    <div class="mt-1">
      <NButton :loading="isLogoutLoading" type="error" class="" @click="handleLogout">
        <PhSignOut />
        Logout
      </NButton>
    </div>
  </NSpace>
</template>

<script lang="ts" setup>
import { ILoginInput, ILoginResponse } from '@/types/repository-types'
import { useAuthStore } from '@/stores/auth'
import { useMutation } from '@tanstack/vue-query'
import { useNotification } from 'naive-ui'

const authStore = useAuthStore()
const notification = useNotification()

const form = reactive<ILoginInput>({
  username: 'user_597',
  password: '123456',
});

const { isLoading: isLoginLoading, isError, error, isSuccess, mutate } = useMutation({
  mutationFn: (payload: ILoginInput) => authStore.login(payload)
})


async function handleLogin(): Promise<void> {
  mutate(form)
}

const { isLoading: isLogoutLoading, isError: isLogoutError, error: logoutError, mutate: logoutMutate } = useMutation({
  mutationFn: () => authStore.logout(),
  onError: (error: Error, variables, context) => {
    console.log(error)
    notification.error({
      content: error.message,
      closable: true,
      duration: 5000
    })
  }
})

async function handleLogout(): Promise<void> {
  logoutMutate()
}

</script>



<style></style>
