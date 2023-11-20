<script setup lang="ts">
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import db from '../firestore';
import { collection, doc, getDoc } from 'firebase/firestore/lite';
import { onMounted, ref } from "vue";
import router from "@/router";
import VueApexCharts from "vue3-apexcharts";

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
const series = ref([1, 2, 3, 2, 1]);

const options = ref({});

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
    <template>
        <div>
            <h1>chart: </h1>
            <apexchart width="500" type="bar" :options="options" :series="series"></apexchart>
        </div>
    </template>
    <WelcomeItem>
        <template #icon>
            <DocumentationIcon />
        </template>
        <template #heading>Player: {{ playerName }}</template>
        <ul>
            <li> townHallLevel: {{ townHallLevel }}</li>
            <li> townHallWeaponLevel: {{ townHallWeaponLevel }}</li>
            <li> expLevel: {{ expLevel }}</li>
            <li> bestTrophies: {{ bestTrophies }}</li>
            <li> warStars: {{ warStars }}</li>
            <li> attackWins: {{ attackWins }}</li>
            <li> defenseWins: {{ defenseWins }}</li>
            <li> warPreference: {{ warPreference }}</li>
            <li> donations: {{ donations }}</li>
            <li> donationsReceived: {{ donationsReceived }}</li>
            <li> clanCapitalContributions: {{ clanCapitalContributions }}</li>
        </ul>
    </WelcomeItem>
</template>
