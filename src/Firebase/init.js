import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Import the functions you need from the SDKs you need

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBq0jq8WMtjWYZEhauJU85JSQA6upYQjZw',
  authDomain: 'week7-renhao.firebaseapp.com',
  projectId: 'week7-renhao',
  storageBucket: 'week7-renhao.appspot.com',
  messagingSenderId: '1085066672994',
  appId: '1:1085066672994:web:8f3606789a4e4c6eb64a3b'
}

// Initialize Firebase
initializeApp(firebaseConfig)
const db = getFirestore()
export default db
