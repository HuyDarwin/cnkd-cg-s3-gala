// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAsEiYM1IkNUOyBFnlSbUMW5Pu9nPakN6g",
    authDomain: "cnkd-cgv-con.firebaseapp.com",
    databaseURL: "https://cnkd-cgv-con-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "cnkd-cgv-con",
    storageBucket: "cnkd-cgv-con.appspot.com",
    messagingSenderId: "547300743965",
    appId: "1:547300743965:web:420e24de4dc5c8e1bd9ff4",
    measurementId: "G-SSK8VXJEQH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);