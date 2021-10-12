
import inatializeAuthenticaion from '../FIrebase/firebase.init';
import { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


inatializeAuthenticaion();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState({})

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // Google Sign In
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user
                console.log(user)
                setUser(user);
            })
            .catch(error => {
                setError(error.message)
            })
    }
    return {
        user,
        error,
        signInUsingGoogle
    }

}

export default useFirebase;