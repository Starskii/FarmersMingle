<template>
    <main>
      <Leaderboard></Leaderboard>
    </main>
  </template> 
  
  <script setup lang="ts">
  import Leaderboard from "@/components/Leaderboard.vue";
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
  