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
    const playerRef = doc(db, "players", playerId);
    const snapshot = await getDoc(playerRef);
    playerName.value = snapshot.data()?.name;
    townHallLevel.value = snapshot.data()?.townHallLevel;
    townHallWeaponLevel.value = snapshot.data()?.townHallWeaponLevel;
    expLevel.value = snapshot.data()?.expLevel;
    bestTrophies.value = snapshot.data()?.bestTrophies;
    warStars.value = snapshot.data()?.warStars;
    attackWins.value = snapshot.data()?.attackWins;
    defenseWins.value = snapshot.data()?.defenseWins;
    warPreference.value = snapshot.data()?.warPreference;
    donations.value = snapshot.data()?.donations;
    donationsReceived.value = snapshot.data()?.donationsReceived;
    clanCapitalContributions.value = snapshot.data()?.clanCapitalContributions;
    });
</script>

<template>
    <h1>Name: {{ playerName }}</h1>
    <p> townHallLevel: {{ townHallLevel }}</p>
    <p> townHallWeaponLevel: {{ townHallWeaponLevel }}</p>
    <p> expLevel: {{ expLevel }}</p>
    <p> bestTrophies: {{ bestTrophies }}</p>
    <p> warStars: {{ warStars }}</p>
    <p> attackWins: {{ attackWins }}</p>
    <p> defenseWins: {{ defenseWins }}</p>
    <p> warPreference: {{ warPreference }}</p>
    <p> donations: {{ donations }}</p>
    <p> donationsReceived: {{ donationsReceived }}</p>
    <p> clanCapitalContributions: {{ clanCapitalContributions }}</p>

</template>
