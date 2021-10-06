import {getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import './App.css';
import inatializaAutentication from './FireBase/firebase.inatialize';

inatializaAutentication();
const provider = new GoogleAuthProvider();

function App() {
  const signInHandeler = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        console.log(user);
    })
  }
  return (
    <div className="App">
      <button onClick={signInHandeler}>Google Sing In</button>
    </div>
  );
}

export default App;
