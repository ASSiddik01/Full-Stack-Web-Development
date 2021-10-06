import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import './App.css';
import inatializaAutentication from './FireBase/firebase.inatialize';
import { useState } from 'react';

inatializaAutentication();
const provider = new GoogleAuthProvider();

function App() {
  const [user, setUser] = useState([])

  const signInHandeler = () => {
    const auth = getAuth();
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
  return (
    <div className="App">
      <button onClick={signInHandeler}>Google Sing In</button>
      <br />
      {
        user.email && <div>
          <h2>Welcome {user.name} </h2>
          <p>Your email: {user.email} </p>
          <img src={user.photo} alt="" />
        </div>
      }
    </div>
  );
}

export default App;
