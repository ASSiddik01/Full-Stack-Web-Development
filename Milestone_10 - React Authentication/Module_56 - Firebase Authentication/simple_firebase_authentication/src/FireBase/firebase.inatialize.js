import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const inatializaAutentication = () => {
    initializeApp(firebaseConfig);
}

export default inatializaAutentication;