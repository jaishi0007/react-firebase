import { initializeApp } from 'firebase/app';

//firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyArl6XY52yh5HnRgwztMntuptuI-0lOPqU",
    authDomain: "react-firebase-90f69.firebaseapp.com",
    databaseURL: "https://react-firebase-90f69-default-rtdb.firebaseio.com",
    projectId: "react-firebase-90f69",
    storageBucket: "react-firebase-90f69.appspot.com",
    messagingSenderId: "162866867262",
    appId: "1:162866867262:web:3cfbd9095130134311756f",
    measurementId: "G-C7NMH8TETH"
  };

//initilize firebase instance
const app = initializeApp(firebaseConfig);
export default app;