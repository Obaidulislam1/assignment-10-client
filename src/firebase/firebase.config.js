// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANNsn_Ok2JfzGH8oEE5ILKLWj2lhUX3jI",
  authDomain: "assignment-10-clientside.firebaseapp.com",
  projectId: "assignment-10-clientside",
  storageBucket: "assignment-10-clientside.appspot.com",
  messagingSenderId: "654801369647",
  appId: "1:654801369647:web:2074ab0a9537c5343764da",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;