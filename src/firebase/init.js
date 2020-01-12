import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyBb7bSlVTuxCB9jUVwmv2AK___95vcA0do",
  authDomain: "smoothie-app-6264d.firebaseapp.com",
  databaseURL: "https://smoothie-app-6264d.firebaseio.com",
  projectId: "smoothie-app-6264d",
  storageBucket: "smoothie-app-6264d.appspot.com",
  messagingSenderId: "250267340546",
  appId: "1:250267340546:web:3193fc0084a556b23cbc1b"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore()

//export firestore database
export default firebaseApp.firestore()
