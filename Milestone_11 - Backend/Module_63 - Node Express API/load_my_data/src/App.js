import './App.css';
import { useState, useRef } from 'react';
import { useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  const nameRef = useRef();
  const emailRef = useRef();
  
  useEffect(()=> {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const addUserHandle = e => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;

    const newUser = {
      name: name,
      email:email
    }
    
    // Send data to server
    fetch('http://localhost:5000/users'{
      method = 'post',
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify(newUser);
    })
      .then(res => res.json())
    

    e.preventDefault();
  }


  return (
    <div className="App">
      <h2>User: {users.length} </h2>
      <form onSubmit={addUserHandle}>
        <input type="text" ref={nameRef} name="" id="" />
        <input type="email" ref={emailRef} name="" id="" />
        <input type="submit" value="Submit" />
      </form>


      <ul>
        {
          users.map(user => <li key={user.id} > {user.id}: {user.name} </li> )
        }
      </ul>
    </div>
  );
}

export default App;
