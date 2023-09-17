<template>
  <div>
    <div>
      <h1>Color mode: {{ $colorMode.value }}</h1>
      <select v-model="$colorMode.preference">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      <PhSunDim v-if="colorMode.preference === 'dark'" size="50" weight="duotone" color="#C5E353"
        @click="colorMode.preference = 'light'" class="cursor-pointer" />
      <PhMoonStars v-else size="50" weight="duotone" @click="colorMode.preference = 'dark'" color="#89C225" role="button"
        class="cursor-pointer" />
    </div>
    <div class="mt-5 mx-3">
    </div>
    <div>
      <div v-for="item in data" :key="item.id">
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const colorMode = useColorMode()

const fetcher = async () =>
  await fetch('https://jsonplaceholder.typicode.com/posts').then((response) =>
    response.json(),
  )

const { data, suspense } = useQuery({ queryKey: ['test'], queryFn: fetcher })

await suspense()
</script>

<style></style>
