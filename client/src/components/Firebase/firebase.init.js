import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
import { getAuth } from "firebase/auth";

const initializeAuthentication=()=>{
    initializeApp(firebaseConfig);
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default initializeAuthentication;