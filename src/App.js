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
import BuscarPage from './components/buscar/BuscarPage';
import ModVentas from './components/modventas/ModVentasPage';
import PaginaNoEncontrada from './components/PaginaNoEncontrada/PaginaNoEncontrada';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/user" exact>
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
          <PaginaNoEncontrada />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>

        <Route path="/ventas" exact>
          <BuscarPage />
        </Route>

        <Route path="/vendedores" exact>
          <ModVentas />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}


export default App;