import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const inatializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default inatializeAuthentication;