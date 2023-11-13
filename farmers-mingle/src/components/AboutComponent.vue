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
import router from "../router/index";

const clanRef = collection(db, "clans");
const members: Record<string, string>[] = []
const clanName = ref(null);
// curl -H 'Authorization: ' 

onMounted(async () => {
      const snapshot = await getDocs(clanRef);
      snapshot.forEach((doc) => {
        console.log(doc.data().members);
        clanName.value = doc.data().name;
        doc.data().members.forEach((member: { name: string; role: string; trophies: string, tag: string; }) => {
            members.push({"name": member.name, "role": member.role, "trophies": member.trophies, "tag": member.tag})
        })
      });
      console.log(members);
    })


</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>{{ clanName }}</template>
    <li v-for="member in members">
    {{ member["name"] }} | {{ member["role"] }} | {{ member["trophies"] }} 
      <router-link :to="{name: member['tag']}">
        <button id="myButton" class="foo bar">Go!</button>
      </router-link>
    </li>
  </WelcomeItem>
</template>

