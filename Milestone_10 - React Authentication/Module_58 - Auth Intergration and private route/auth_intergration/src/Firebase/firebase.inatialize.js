import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const inatializeAuthenticaion = () => {
    initializeApp(firebaseConfig);
}

export default inatializeAuthenticaion;