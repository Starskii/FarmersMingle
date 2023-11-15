<script setup lang="ts">
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import { ref, watchEffect, onMounted, befor, onBeforeMount } from 'vue';
import db from '../firestore';
import { collection, getDocs } from 'firebase/firestore/lite';
import PlayerProfile from "../views/PlayerProfile.vue";
import { useRouter, useRoute } from 'vue-router';
import Table from "./Table.vue";

const router = useRouter();
const clanRef = collection(db, "clans");
const members: Record<string, string>[] = [];
const clanName = ref(null);
// curl -H 'Authorization: ' 

onBeforeMount(async () => {
      const snapshot = await getDocs(clanRef);
      snapshot.forEach((doc) => {
        console.log(doc.data().members);
        clanName.value = doc.data().name;
        doc.data().members.forEach((member: { name: string; role: string; trophies: string, tag: string; }) => {
            members.push({"name": member.name, role: member.role, trophies: member.trophies, tag: member.tag})
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
    <template>
    <table id="tableComponent" class="table table-bordered table-striped">
        <thead>
        <tr>
            <!-- loop through each value of the fields to get the table header -->
            <th v-for="attribute in  Object.keys(members[0])" :key='attribute'>
                {{ attribute }} <i class="bi bi-sort-alpha-down" aria-label='Sort Icon'></i>
            </th>
        </tr>
        </thead>
        <tbody>
            <!-- Loop through the list get the each student data -->
            <tr v-for="player in members">
                <td v-for="attributeValue in player" :key='attributeValue'>{{ attributeValue }}</td>
            </tr>
        </tbody>
    </table>
</template>
  </WelcomeItem>
</template>

