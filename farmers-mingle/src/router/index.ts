import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import db from '../firestore';
import { collection, getDocs } from 'firebase/firestore/lite';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/discord",
      name: "discord",
      component: () => import("../views/DiscordView.vue")
    }
  ],
});

const clanRef = collection(db, "clans");
const members: Record<string, string>[] = []

async () => {
  const snapshot = await getDocs(clanRef);
  snapshot.forEach((doc) => {
    doc.data().members.forEach((member: { name: string; role: string; trophies: string, tag: string; }) => {
        members.push({"name": member.name, "role": member.role, "trophies": member.trophies, "tag": member.tag})
    })
  }); 
}

members.forEach((member) => {
  router.addRoute({
    path: member['tag'],
    name: member['tag'],
    component: () => import("../views/DiscordView.vue")     
  })
});
export default router;
