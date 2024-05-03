<script setup lang="ts">
const r = ref(0)
</script>

<template>
  <div @click="r++">{{ r }}</div>
</template>
