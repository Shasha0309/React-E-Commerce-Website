import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDTv1uNKa6Lg0w91Knf-4ElwBLIFdTvSRs",
    authDomain: "e-commerce-website-fed4f.firebaseapp.com",
    projectId: "e-commerce-website-fed4f",
    storageBucket: "e-commerce-website-fed4f.appspot.com",
    messagingSenderId: "980845191889",
    appId: "1:980845191889:web:313eebbf01049b3e4c9bf0",
    measurementId: "G-926Q5K6KPM"
  };

  const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;