<script setup lang="ts">
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import db from '../firestore';
import { collection, doc, getDoc } from 'firebase/firestore/lite';
import { onMounted, ref } from "vue";
import router from "@/router";

const playerName = ref(null);
const townHallLevel = ref(null);
const townHallWeaponLevel = ref(null);
const expLevel = ref(null);
const bestTrophies = ref(null);
const warStars = ref(null);
const attackWins = ref(null);
const defenseWins = ref(null);
const warPreference = ref(null);
const donations = ref(null);
const donationsReceived = ref(null);
const clanCapitalContributions = ref(null);

onMounted(async () => {
    const playerId = router.currentRoute.value.path.split("/")[3].replace("%23", "#");
    console.log(playerId);
    const playerRef = doc(db, "players", playerId);
    const snapshot = await getDoc(playerRef);
    playerName.value = snapshot.data()?.name;
    console.log(playerName.value);
    });
</script>

<template>
    <h1>{{ playerName }}</h1>
</template>
