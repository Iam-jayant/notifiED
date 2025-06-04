// filepath: c:\Users\jayan\Desktop\notifiED\lib\firebase-client.ts
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIBoyc65LW1SM7uFczaG4VZCgtr9IiKcA",
  authDomain: "notified-461812.firebaseapp.com",
  projectId: "notified-461812",
  storageBucket: "notified-461812.firebasestorage.app",
  messagingSenderId: "552628784056",
  appId: "1:552628784056:web:b7cf58f3cbab2b38f39d4d",
  measurementId: "G-1SKR3YJP19",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)