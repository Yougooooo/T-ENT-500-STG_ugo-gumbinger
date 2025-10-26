<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  if (typeof window !== 'undefined') {
    import('cursor-effects').then((module) => {
      new module.fairyDustCursor({
        colors: ['#FFA559']
      })
    })
  }
})
</script>