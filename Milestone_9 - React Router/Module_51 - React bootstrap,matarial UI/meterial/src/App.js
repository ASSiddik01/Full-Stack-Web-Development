import { Button, Rating } from '@mui/material';

import './App.css';

function App() {
  return (
    <div className="App">
      <Button variant="contained">Contained</Button>
      <Rating name="read-only" value={2} readOnly />
    </div>
  );
}

export default App;
