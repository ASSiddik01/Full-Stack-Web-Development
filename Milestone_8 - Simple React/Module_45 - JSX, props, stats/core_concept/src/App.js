import logo from './logo.svg';
import './App.css';
const name = 'Abu Shama';
function App() {
  return (
    <div className="App">
      {/* <About></About>
      <About></About>
      <About></About>
      <About></About>
      <About></About> */}

      <Friend name="Shakib" address='Nouga'></Friend>
      <Friend name="Salman" address='Rangpur'></Friend>
      <Friend name="Shamim" address='Noakhali'></Friend>
    </div>
  );
}
// function About() {
//   return (
//     <div className="about">
//       <h2>Name: {name}</h2>
//       <h4>Occupetion: Student</h4>
//     </div>
//   );
// }

function Friend(props) {
  return (
    <div className="about">
      <h2>Name: {props.name }</h2>
      <h4>Address: {props.address }</h4>
    </div>
  )
}
export default App;
