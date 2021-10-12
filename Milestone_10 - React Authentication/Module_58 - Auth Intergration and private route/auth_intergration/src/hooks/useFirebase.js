import inatializeAuthenticaion from '../FIrebase/firebase.init';
import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged } from "firebase/auth";


inatializeAuthenticaion();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')

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

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user){
                console.log('Clicked',user)
                setUser(user);
            }
        })
    },[])


    return {
        user,
        error,
        signInUsingGoogle
    }

}

export default useFirebase;