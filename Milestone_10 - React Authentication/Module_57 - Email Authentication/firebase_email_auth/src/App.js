import './App.css';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import inatializaAutentication from "./Firebase/firebase.inatialize"
import { useState } from 'react';

inatializaAutentication()
const auth = getAuth();

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  // Submit handle
  const handleSignUp = e => {
    e.preventDefault();
    if (password.length < 6) {
      setError('Password should be at least 6 characters');
      return;
    }
    if (!/(?=.*[0-9])/.test(password)) {
      setError('At least one number');
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
  }
  // Email handle
  const handleEmail = e => {
    setEmail(e.target.value);
  }
  // Password handle
  const handlePassword = e => {
    setPassword(e.target.value);
  }



  return (
    <div className="App">
      <form onSubmit={handleSignUp} >
        <h1>Please! Sign Up</h1>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email:</label>
          <div className="col-sm-10">
            <input onBlur={handleEmail} type="email" className="form-control" id="inputEmail3" />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input onBlur={handlePassword} type="password" className="form-control" id="inputPassword3" />
          </div>
        </div>
        <div className="row mb-3">{error}</div>
        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
    </div>
  );
}

export default App;
