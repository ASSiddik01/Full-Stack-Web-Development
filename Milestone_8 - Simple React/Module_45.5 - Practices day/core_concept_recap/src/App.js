import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <MyComponents brand='Apple' price='50000'></MyComponents>
      <MyComponents brand='LG' price='40000'></MyComponents>
      <MyComponents brand='Samsung' price='30000'></MyComponents>
    </div>
  );
}

function MyComponents(props) {
  const myStyle = {
    backgroundColor: 'lightblue',
    border: '2px solid yollow',
    margin: '20px',
    padding:'20px'
  }
  return (
    <div style={myStyle} className="">
      <h1>Brand name: {props.brand }</h1>
      <h3 style={{color:'red'}}>Price: {props.price }</h3>
    </div>
    
  )
}

export default App;
