import{ initilizeApp } from 'firebase/app'
import { 
    getFirestore, collection
} from 'firebase/forestore'

const firebaseConfig = {
    apiKey: "AIzaSyA5HkoXk8Ak8uwn2d-7y75g9sldQs5kFIs",
    authDomain: "real-time-chatroom-78101.firebaseapp.com",
    projectId: "real-time-chatroom-78101",
    storageBucket: "real-time-chatroom-78101.firebasestorage.app",
    messagingSenderId: "1058210452892",
    appId: "1:1058210452892:web:b0f24d273e6d80b6c46459"
  };

//   initialize database app
  initilizeApp(firebaseConfig)

//   init services
const db = getFirestore()

// collection ref
const colRef = collection(db, "real-time-chatroom")