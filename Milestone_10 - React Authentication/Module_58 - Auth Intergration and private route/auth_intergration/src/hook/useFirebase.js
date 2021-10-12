import { useState, useEffect } from 'react';
import inatializeAuthenticaion from '../Firebase/firebase.inatialize';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged,signOut,GithubAuthProvider } from "firebase/auth";

inatializeAuthenticaion();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const logout = () => {
        signOut(auth)
            .then(() => {
            setUser({})
        })
    }
    const signInUsingGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message);
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if(user){
                console.log("Inside change", user)
                setUser(user);
            }
        })
    },[])


    return {
        user,
        error,
        signInUsingGoogle,
        logout,
        signInUsingGithub
    }

}

export default useFirebase;