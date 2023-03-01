import {
  initializeApp,
  // getAuth,
} from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQ07FEbKNQen8WHuSzU0UroLjabiMjMzA",
  authDomain: "firestore-learning-7dab7.firebaseapp.com",
  databaseURL: "https://firestore-learning-7dab7-default-rtdb.firebaseio.com",
  projectId: "firestore-learning-7dab7",
  storageBucket: "firestore-learning-7dab7.appspot.com",
  messagingSenderId: "530858020024",
  appId: "1:530858020024:web:ecfde694decc96ba5c384d",
};

// Initialize Firebase
var app;
try {
  app = initializeApp(firebaseConfig);

} catch (e) {

  console.log(e);
}
// export const auth = getAuth(app);
export const auth = getAuth(app);
export default app;
