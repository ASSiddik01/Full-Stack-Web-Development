import './App.css';
import Home from './Components/Home/Home';
import Friends from './Components/Friends/Friends';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import FriendDetails from './Components/FriendDetails/FriendDetails';
import Culture from './Components/Culture/Culture';



function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/about'>
            <About></About>
          </Route>
          <Route path='/friends'>
            <Friends></Friends>
          </Route>
          <Route path='/friend/:friendId'>
            <FriendDetails/>
          </Route>
          <Route exact path='/about/culture'>
            <Culture></Culture>
          </Route>
          <Route>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
