<script lang="ts">

    // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKyNgZiRtgSRlL_V5-4k2H-dtp6I_VDaY",
  authDomain: "sveltetdl.firebaseapp.com",
  databaseURL: "https://sveltetdl-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sveltetdl",
  storageBucket: "sveltetdl.appspot.com",
  messagingSenderId: "834253270308",
  appId: "1:834253270308:web:1f3fba536790e7b48217b1",
  measurementId: "G-KJ1BL6FBJ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


import { FirebaseServiceInstance } from "./FirebaseService.svelte";
  let s = new FirebaseServiceInstance();
  s.init(app);
</script>