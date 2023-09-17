<template>
  <div>
    <NConfigProvider :theme="currentTheme">
      <NDialogProvider>
        <NMessageProvider>
          <NNotificationProvider>
            <NLoadingBarProvider>
                <NuxtPage />
                <n-global-style />
              </NLoadingBarProvider>
            </NNotificationProvider>
          </NMessageProvider>
        </NDialogProvider>
    </NConfigProvider>
  </div>
</template>

<script setup lang="ts">
import { darkTheme } from 'naive-ui'

const currentTheme = ref<any>(null)
const colorMode = useColorMode()
console.log(colorMode.value)

watch(() => colorMode.preference, (newValue) => {
  console.log('n', newValue)
  currentTheme.value = newValue === 'dark' ? darkTheme : null
})
</script>
