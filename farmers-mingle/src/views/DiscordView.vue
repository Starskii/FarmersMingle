<script setup lang="ts">
import WelcomeItem from "../components/WelcomeItem.vue";
import DocumentationIcon from "../components/icons/IconDocumentation.vue";
</script>

<template>
  <main>
    <WelcomeItem>
    <template #icon>
    <DocumentationIcon />
    <template #heading>Join our Discord!</template>
    Join our discord by clicking <a href="https://discord.gg/dBYRUvfuMP">here!</a>
  </template>
  </WelcomeItem>
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
