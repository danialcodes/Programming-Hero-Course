import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "./firebase.config";

const initializeAuth = () => {
    initializeApp(firebaseConfig);
    // const app = initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app);
}
export default initializeAuth;
// const app =
// const analytics =