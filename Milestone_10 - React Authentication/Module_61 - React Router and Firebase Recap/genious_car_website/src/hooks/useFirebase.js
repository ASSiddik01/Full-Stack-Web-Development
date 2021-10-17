import { getAuth, signInWithPopup, GoogleAuthProvider, signOut,onAuthStateChanged } from "firebase/auth";
import inatializeAuthentication from "../Pages/Login/Firebase/firebase.init";
import { useState } from 'react';
import { useEffect } from 'react';


inatializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});


    const auth = getAuth();
    const GoogleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, GoogleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user)
            })
    }

    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
        });
        return () => unSubscribed;
    },[])

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    return {
        user,
        signInUsingGoogle,
        logOut,
    }

}

export default useFirebase;