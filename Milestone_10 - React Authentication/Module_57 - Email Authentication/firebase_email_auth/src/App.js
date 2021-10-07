import './App.css';

function App() {
  const handleSignUp = e => {
    console.log('Sign Up');
    e.preventDefault();
  }



  return (
    <div className="App">

      <form onSubmit={handleSignUp} >
        <h1>Please! Sign Up</h1>
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" />
        <br />
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" />
        <br />
        <br />
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
}

export default App;
