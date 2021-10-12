import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const inatializeAuthenticaton = () => {
    initializeApp(firebaseConfig);
}

export default inatializeAuthenticaton;