<template>
  <main>
    <AboutComponent></AboutComponent>
  </main>
</template> 

<script setup lang="ts">
import AboutComponent from "@/components/AboutComponent.vue";
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
