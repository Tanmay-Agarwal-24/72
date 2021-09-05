import firebase from 'firebase'
require("@firebase/firestore")

// Your web app's Firebase configuration
var firebaseConfig = {

  apiKey: "AIzaSyCO3mrL-wdLQDlIVaWmf26uB_q5axesNwA",
  authDomain: "pro-c138e.firebaseapp.com",
  projectId: "pro-c138e",
  storageBucket: "pro-c138e.appspot.com",
  messagingSenderId: "1064779932619",
  appId: "1:1064779932619:web:a7249d32e7fcb969974c4e"

}

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

