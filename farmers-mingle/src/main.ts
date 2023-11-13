import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
 // Import the functions you need from the SDKs you need
 import { initializeApp } from "firebase/app";
 import { getAnalytics } from "firebase/analytics";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyCezsdCdbzomTnUYvikiom6MLG233mTMkE",
   authDomain: "farmersmingle.firebaseapp.com",
   projectId: "farmersmingle",
   storageBucket: "farmersmingle.appspot.com",
   messagingSenderId: "963512979321",
   appId: "1:963512979321:web:03e6ae8b7164af6e62a9a8",
   measurementId: "G-39VXQCQEVF"
 };
 
 
 // Initialize Firebase
 const fapp = initializeApp(firebaseConfig);
 const analytics = getAnalytics(fapp);

const app = createApp(App);

app.use(router);

app.mount("#app");
