import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
const name = 'Abu Shama';
const cinema = [
  {name:'Salman Shah', movie:'Shopner Nayok'},
  {name:'Riaz', movie:'Hridoyer Kotha'},
  {name:'Sakib Khan', movie:'Hero'}
]
function App() {
  return (
    <div className="App">
      {/* <About></About>
      <About></About>
      <About></About>
      <About></About>
      <About></About> */}

      {/* <Friend name="Shakib" address='Nouga'></Friend>
      <Friend name="Salman" address='Rangpur'></Friend>
      <Friend name="Shamim" address='Noakhali'></Friend> */}
      
      {/* {
        cinema.map(cinema => <Cinema movie={cinema.movie } name={cinema.name } ></Cinema>)
      } */}
      <Counter></Counter>

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

// function Friend(props) {
//   return (
//     <div className="about">
//       <h2>Name: {props.name }</h2>
//       <h4>Address: {props.address }</h4>
//     </div>
//   )
// }


// function Cinema(props) {
//   return (
//     <div className="about">
//       <h1>Movie name: {props.movie}</h1>
//       <h3>Nayok name: {props.name}</h3>
//     </div>
//   )
// }


function Counter() {
  const [count, setCount] = useState(1);
  const increase = () => {
    const newCount = count + 1;
    setCount(newCount)
  };
  const decrease = () => {
    const newCount = count - 1;
    setCount(newCount)
  };
  return (
    <div className="">
      <h1>Count: {count} </h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
}
export default App;
