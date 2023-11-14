<script setup lang="ts">
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import { ref, watchEffect, onMounted } from 'vue';
import db from '../firestore';
import { collection, getDocs } from 'firebase/firestore/lite';
import PlayerProfile from "../views/PlayerProfile.vue";
import { useRouter, useRoute } from 'vue-router'

const router = useRouter();
const clanRef = collection(db, "clans");
const members: Record<string, string>[] = [];
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
      <RouterLink :to="{ name: 'playerProfile', params: { id: member['tag'] }}" v-for="member in members">{{ member["name"] }} | {{ member["role"] }} | {{ member["trophies"] }}</RouterLink>
  </WelcomeItem>
</template>

