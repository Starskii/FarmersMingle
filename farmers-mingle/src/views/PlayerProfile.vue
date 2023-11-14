<script setup lang="ts">
import PlayerComponent from "@/components/PlayerComponent.vue";
</script>

<template>
  <main>
    <PlayerComponent></PlayerComponent>
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
