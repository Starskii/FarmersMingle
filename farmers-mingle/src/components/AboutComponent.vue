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
const tblHeaders = ref(['Name', 'Role', 'Tag', 'Trophies'])
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
    <template>
      <table id="tableComponent" class="table table-bordered table-striped">
        <thead>
          <tr>
            <!-- loop through each value of the fields to get the table header -->
            <template v-if="loaded">
              Nothing To Show
            </template>
            <th v-for="attribute in tblHeaders.values()" :key='attribute'>
              {{ attribute }} <i class="bi bi-sort-alpha-down" aria-label='Sort Icon'></i>
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- Loop through the list get the each student data -->
          <tr v-for="player in members?.values()">
            <td v-for="attributeValue in player" :key='attributeValue'>{{ attributeValue }}</td>
          </tr>
        </tbody>
      </table>
    </template>
  </WelcomeItem>
</template>

