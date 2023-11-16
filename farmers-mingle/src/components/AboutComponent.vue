<script setup lang="ts">
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import { ref, watchEffect, onMounted } from 'vue';
import db from '../firestore';
import { collection, getDocs } from 'firebase/firestore/lite';
import PlayerProfile from "../views/PlayerProfile.vue";
import { useRouter, useRoute } from 'vue-router';
import Table from "./Table.vue";
import { Player } from "./models/Player";

const router = useRouter();
const clanRef = collection(db, "clans");
const tblHeaders = ref(['Name', 'Role', 'Trophies'])
const members = ref<Player[]>([]);
const clanName = ref(null);
const loaded = ref(false) 

onMounted(async () => {
  const snapshot = await getDocs(clanRef);
  snapshot.forEach((doc) => {
    console.log(doc.data().members);
    clanName.value = doc.data().name;
    doc.data().members.forEach((member: { name: string; role: string; trophies: string, tag: string; }) => {
      let player = new Player(member.name, member.role, member.trophies, member.tag)
      members.value?.push(player)
    })
  });
  console.log(members);
  loaded.value = true;
})


</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>{{ clanName }}</template>
      <table>
        <tr>
          <td v-for="header in tblHeaders.values()"> {{ header }} </td>
        </tr>
        <tr v-for="member in members.values()">
          <td>
            <RouterLink to="/about/players/{member.tag}">{{ member.name }}</RouterLink>
          </td>
          <td>
            {{ member.role }}
          </td>
          <td>
            {{ member.trophies }}
          </td>
        </tr>
      </table>
  </WelcomeItem>
</template>

