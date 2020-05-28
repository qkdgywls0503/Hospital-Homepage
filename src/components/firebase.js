import firebase from "firebase";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCDz-aiDblqF-ejdeRzOJWbC3xeYIyFBRg",
  authDomain: "hospital-18041.firebaseapp.com",
  databaseURL: "https://hospital-18041.firebaseio.com",
  projectId: "hospital-18041",
  storageBucket: "hospital-18041.appspot.com",
  messagingSenderId: "195050199058",
  appId: "1:195050199058:web:83800618047177dbcce0cb",
  measurementId: "G-N6E306EMH8",
};

firebase.initializeApp(config);
const firestore = new firebase.firestore();
export { firestore };
