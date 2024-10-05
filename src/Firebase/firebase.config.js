import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYvP9cPoNYKHC_LioC9N5iIJdZnoFg6zY",
  authDomain: "express-react-course-app.firebaseapp.com",
  projectId: "express-react-course-app",
  storageBucket: "express-react-course-app.appspot.com",
  messagingSenderId: "844654589960",
  appId: "1:844654589960:web:5e21b7b483b6abc72879bd",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export default app;
