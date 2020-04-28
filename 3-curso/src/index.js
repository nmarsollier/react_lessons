import React from "react";
import ReactDOM from "react-dom"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HelloJSXSample from "./jsx"
import HelloClassSample from "./clases"
import Expresiones from "./expresiones"
import Clock from "./estadoClases"
import { ActionLink, Toggle } from "./eventos"
import { NumberList, NumberList2 } from "./tips";
import { NameForm } from "./forms"

export default function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link><br />
        <Link to="/helloFunc">Hola Funcional y JSX</Link><br />
        <Link to="/helloClass">Hola Class Component </Link><br />
        <Link to="/expresions">Expresiones </Link><br />
        <Link to="/estado">Estado en clases </Link><br />
        <Link to="/eventos">Eventos </Link><br />
        <Link to="/tips">Tips </Link><br />
        <Link to="/forms">Formularios </Link><br />

        <Switch>
          <Route path="/helloFunc">
            <HelloJSXSample />
          </Route>
          <Route path="/helloClass">
            <HelloClassSample />
          </Route>
          <Route path="/expresions">
            <Expresiones />
          </Route>
          <Route path="/estado">
            <Clock />
          </Route>
          <Route path="/eventos">
            <div>
              <ActionLink />
              <Toggle />
            </div>
          </Route>
          <Route path="/tips">
            <div>
              <NumberList />
              <NumberList2 numbers={[1, 2, 3]} />
            </div>
          </Route>
          <Route path="/forms">
            <div>
              <NameForm />
            </div>
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

ReactDOM.render(
  <App></App>,
  document.getElementById('root')
)

/**
 * Render renderiza un elemento en la pantalla,
 * Podemos usar render cuantas veces queramos, de hecho cada vez que reemplazadmos
 * un elemento em pantalla o lo actualizamos, se renderiza de forma similar.
 * Se genera el elemento completo y se compara con el que esta en pantalla actualizando los cambios
 */

function Home() {
  return <h2>Home</h2>;
}
