import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  
  useEffect(()=> {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);


  return (
    <div className="App">
      <h2>User: {users.length} </h2>
      <ul>
        {
          users.map(user => <li key={user.id} > {user.id}: {user.name} </li> )
        }
      </ul>
    </div>
  );
}

export default App;
