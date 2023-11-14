<script setup lang="ts">
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import { ref, watchEffect, onMounted } from 'vue';
import db from '../firestore';
import { collection, getDocs } from 'firebase/firestore/lite';
import router from "../router/index";
import PlayerProfile from "../views/PlayerProfile.vue";

const clanRef = collection(db, "clans");
const members: Record<string, string>[] = [];
const clanName = ref(null);
// curl -H 'Authorization: ' 

function navigateToProfile(tag: string){
  router.addRoute({
    name: tag,
    path: "/about/player/" + tag,
    component: PlayerProfile
  });
  console.log(router.getRoutes);
  router.push("/about/player/" + tag);
}

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
      <button id="myButton" @click="navigateToProfile(member['tag'])"> {{ member["name"] }} | {{ member["role"] }} | {{ member["trophies"] }}</button>
    </li>
  </WelcomeItem>
</template>

