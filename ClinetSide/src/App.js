import logo from './logo.svg';
import './App.css';
import {Switch,Route} from "react-router-dom";
import Home from './pages/Home';
import AddUser from './pages/AddUser';
import UpdateUser from './pages/UpdateUser';
import { deleteUser } from './redux/actions';

function App() {
  return (
    <div className="App">
      <Switch>

      <Route exact path="/" component={Home}/>
      <Route exact path="/addUser" component={AddUser}/>
      <Route exact path="/updateUser/:id" component={UpdateUser}/>
      
      </Switch>
      
    </div>
  );
}

export default App;
