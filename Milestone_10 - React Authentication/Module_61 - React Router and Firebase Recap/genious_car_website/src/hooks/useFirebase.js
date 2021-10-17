import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import inatializeAuthentication from "../Pages/Login/Firebase/firebase.init";
import { useState } from 'react';
import { useEffect } from 'react';


inatializeAuthentication();

const useFirebase = () => {
    const [users, setUsers] = useState({});

    const auth = getAuth();

    const signInUsingGoogle = () => {
        const GoogleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, GoogleProvider)
            .then((result) => {
                const user = result.user;
                setUsers(user)
            })
    }

    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUsers(user);
            } else {
                setUsers({})
            }
        });
        return () => unSubscribed;
    }, [])

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUsers({})
            })
    }

    return {
        users,
        signInUsingGoogle,
        logOut,
    }

}

export default useFirebase;