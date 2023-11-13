<script setup lang="ts">
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";
import { ref, watchEffect, onMounted } from 'vue'
import axios from 'axios';
import db from '../firestore';
import { collection, getDocs } from 'firebase/firestore/lite';

const clanRef = collection(db, "clans");
let members = ref(null);
const clanName = ref(null);
// curl -H 'Authorization: ' 

onMounted(async () => {
      const snapshot = await getDocs(clanRef);
      snapshot.forEach((doc) => {
        console.log(doc.data());
        clanName.value = doc.data().name;
        console.log(doc.data().members);
      })
    });


</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>{{ clanName }}</template>
  </WelcomeItem>
</template>

