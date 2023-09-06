<script setup lang="ts">
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";
import { ref, watchEffect, onMounted } from 'vue'
import axios from 'axios';

const API_URL = 'https://api.clashofclans.com/v1/clans/2VYVGV08P/members';
const API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjI5NDMyMzIxLWQ2YjItNGQ0Zi1iMTIzLTI3ZWIxZmY5YWE0MyIsImlhdCI6MTY5Mzk2MjEzNSwic3ViIjoiZGV2ZWxvcGVyLzdhMjcwZDgyLTlhNTctYjMwZS0xYWZkLTYyMDNiNzBlZjFjMSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjEwMy4yMjQuMjEyLjIyMCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.SHn6SgznwJE6CfTQ-bXIrzTIqSVeDsJ8cJunl7SUpvvGT04JSahCEK-RBeZM2AlFauT14aadM1cgXO8g4AkN0A';
const CONFIG = {
  headers:{
    Authorization: API_KEY,
  }
};

const count = ref(0);
const members = ref(null);

// curl -H 'Authorization: ' 

onMounted(async () => {
      const res = await axios.get(API_URL, CONFIG);
      members.value = res.data;
      console.log(res);
    });



function increment() {
  count.value++;
}


</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>About our Clan</template>
      <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
  </WelcomeItem>
</template>

