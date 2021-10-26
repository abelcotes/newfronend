import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Prenda from './components/Prenda/Prenda';
import User from './components/User/User';


import PaginaNoEncontrada from './components/PaginaNoEncontrada/PaginaNoEncontrada';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Prenda} />
        <Route exact path="/prendas" component={Prenda}/>
        <Route exact path="/" component={User} />
        <Route exact path="/users" component={User}/>
       
        <Route component={PaginaNoEncontrada} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
