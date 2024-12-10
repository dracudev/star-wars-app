import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiL9lU4WtAkez2ajTGLtZ01Isp7VGthB4",
  authDomain: "star-wars-app-6290f.firebaseapp.com",
  projectId: "star-wars-app-6290f",
  storageBucket: "star-wars-app-6290f.firebasestorage.app",
  messagingSenderId: "775205168003",
  appId: "1:775205168003:web:e4bb85bfa0bce29bc18cb6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
