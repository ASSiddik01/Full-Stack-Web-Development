import logo from './logo.svg';
import './App.css';
const name = 'Abu Shama';
function App() {
  return (
    <div className="App">
      <About></About>
      <About></About>
      <About></About>
      <About></About>
      <About></About>
    </div>
  );
}
function About() {
  return (
    <div className="about">
      <h2>Name: {name}</h2>
      <h4>Occupetion: Student</h4>
    </div>
  );
}
export default App;
