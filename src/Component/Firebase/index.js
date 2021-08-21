import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyA6OpNKvqUp9yBUEEgxyNkAKKF-a5Ty-Bs",
  authDomain: "portfolio-akash-7e00f.firebaseapp.com",
  databaseURL: "https://portfolio-akash-7e00f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portfolio-akash-7e00f",
  storageBucket: "portfolio-akash-7e00f.appspot.com",
  messagingSenderId: "738939356013",
  appId: "1:738939356013:web:956251e118eeaa292d1064",
  measurementId: "G-ZBWFZLCRRM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default firebase;