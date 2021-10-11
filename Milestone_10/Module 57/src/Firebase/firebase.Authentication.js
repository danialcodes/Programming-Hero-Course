import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
const Authentication = ()=>{
    const app = initializeApp(firebaseConfig);
    return app;
}

export default Authentication;
