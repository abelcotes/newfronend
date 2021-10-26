import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Prenda from './components/Prenda/Prenda';
import User from './components/User/User';
import Login from './components/Login/Login';
import Register from './components/Register/Register';


import PaginaNoEncontrada from './components/PaginaNoEncontrada/PaginaNoEncontrada';


function App() {
  return (
    <BrowserRouter>
      <Switch>
      
      <Route path="/users" exact>
          <User />
         </Route>

         <Route path="/" exact>
          <Login />
        </Route>
        
        <Route path="/login" exact>
          <Login />
        </Route>

        <Route path="/producto" exact>
          <Prenda />
        </Route>

        <Route path="/no-encontrada" exact>
          <PaginaNoEncontrada/>
        </Route>
        <Route path="/register" exact>
          <Register/>
        </Route>
        
      </Switch>
    </BrowserRouter>
  );
}


export default App;
