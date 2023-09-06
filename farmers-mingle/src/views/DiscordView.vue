<script setup lang="ts">
import DiscordComponent from "@/components/DiscordComponent.vue";
</script>

<template>
  <main>
    <DiscordComponent></DiscordComponent>
  </main>
</template> 

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
