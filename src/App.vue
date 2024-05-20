<script setup lang="ts">
import { useModal, VaButton } from "vuestic-ui"

const { confirm } = useModal()

async function onClick() {
  const result = await confirm("?")
  /* TODO: #dev 消す */ console.log(result)
}
</script>

<template>
  <div>
    <RouterView />
    <!-- <PButton /> -->
    <VaButton @click="onClick">hello</VaButton>
  </div>
</template>
