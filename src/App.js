import Navbar from "./Navbar";
import Todo from "./Todo";
import NewToDo from "./NewToDo";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Navbar/>
          <Switch>
            <Route exact path="/">
              <Todo />
            </Route>
            <Route path="/newtodo">
              <NewToDo/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
