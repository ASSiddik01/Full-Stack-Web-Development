import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home'
import About from './Components/About/About'
import NotFound from './Components/NotFound/NotFound'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
