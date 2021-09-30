import { Button, Rating } from '@mui/material';

import './App.css';
import Newspaper from './components/Newspaper/Newspaper';

function App() {
  return (
    <div className="App">
      <Button variant="contained">Contained</Button>
      <Rating name="read-only" value={2} readOnly />
      <Newspaper></Newspaper>
    </div>
  );
}

export default App;
