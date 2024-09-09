// import './assets/main.css'
// import '@/assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
// import DataTable from 'primevue/datatable'
// import Column from 'primevue/Column'
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Import the functions you need from the SDKs you need

const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)

// app.component('DataTable', DataTable)
// app.component('Column', Column)

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

app.mount('#app')
