import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut } from 'firebase/auth';
import './App.css';
import inatializaAutentication from './FireBase/firebase.inatialize';
import { useState } from 'react';

inatializaAutentication();
const provider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const auth = getAuth();

function App() {
  const [user, setUser] = useState([])


  // Google Sign In
  const signInHandeler = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const { displayName, email, photoURL } = result.user;
        console.log(photoURL)
        const loggedInUser = {
          name: displayName,
          email: email,
          photo: photoURL,
        }
        setUser(loggedInUser);
      })
      .catch(error => {
        console.log(error.message);
      })
  }

  // GitHub Sign In
  const githubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const { displayName, email, photoURL } = result.user;
        console.log(photoURL)
        const loggedInUser = {
          name: displayName,
          email: email,
          photo: photoURL,
        }
        setUser(loggedInUser);
      })
  }

  // Sign Out
  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
  }

  return (
    <div className="App">
      {!user.name ?
        <div>
          <button onClick={signInHandeler}>Google Sing In</button>
          <br />
          <button onClick={githubSignIn} >Github Sign In</button>
          <br />
        </div> :
        <button onClick={signOutHandler} >Sign Out</button>}
      <br />
      {
        user.name && <div>
          <h2>Welcome {user.name} </h2>
          <p>Your email: {user.email} </p>
          <img src={user.photo} alt="" />
        </div>
      }
    </div>
  );
}

export default App;
