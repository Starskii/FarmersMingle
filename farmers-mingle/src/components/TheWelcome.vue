<script setup lang="ts">
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>What is Farmer's Mingle all About?</template>
      Farmers Mingle is a Clan on Clash of Clans
      Join our discord by clicking <a href="https://discord.gg/dBYRUvfuMP">here!</a>
  </WelcomeItem>
</template>
