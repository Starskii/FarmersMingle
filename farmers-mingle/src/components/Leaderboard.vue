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
  <h2 class="center-head">Clan Leaderboard</h2>
    <table class="styled-table">
      <thead>
        <tr>
          <th v-for="header in tblHeaders.values()"> {{ header }} </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="member in members.values()" >
          <td>
            <RouterLink :to="'/stats/players/' + member.tag.replace('#', '%23')">
            {{ member.name }}
            </RouterLink>
          </td>
          <td>
            {{ member.role }}
          </td>
          <td>
            {{ member.trophies }}
          </td>
    </tr>
      </tbody>
    </table>
</template>

<style>
.center-head{
  margin-top: 50px;
  margin-bottom: 25px;
  text-align: center;
}
.styled-table {
    border-collapse: collapse;
    margin-left: auto;
    margin-right: auto;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 80%;
}

.styled-table thead tr {
    background-color: black;
    color: #ffffff;
    text-align: left;
    font-weight: 900;
}

.styled-table th,
.styled-table td {
    border: 3px solid black;
    padding: 12px 15px;
}

.styled-table tbody tr {
    border-bottom: 1px solid #dddddd;
    background-color: #390e7e75;
}

.styled-table tbody tr:nth-of-type(even) {
    background-color: #0e2a8675;
}

.styled-table tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
}

.styled-table tbody tr:hover {
    font-weight: bold;
    opacity: 1;
    color: #009879;
}

</style>