import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import inatializeAuthentication from "../Pages/Login/Firebase/firebase.init";
import { useState } from 'react';
import { useEffect } from 'react';


inatializeAuthentication();

const useFirebase = () => {
    const [users, setUsers] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const GoogleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, GoogleProvider)
            .then((result) => {
                const user = result.user;
                setUsers(user)
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUsers(user);
            } else {
                setUsers({})
            }
            setIsLoading(false)
        });
        return () => unSubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUsers({})
            })
            .finally(() => setIsLoading(false));
    }

    return {
        users,
        isLoading,
        signInUsingGoogle,
        logOut,
    }

}

export default useFirebase;