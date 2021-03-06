import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Link, Route, Switch
} from "react-router-dom";
import HelloJSXSample from "./1_hello";
import HelloClassSample from "./2_hello_class";
import Expresiones from "./3_expresiones";
import Clock from "./4_clock";
import { ActionLink, Toggle } from "./5_eventos";
import { NumberList, NumberList2 } from "./6_tips";
import { NameForm } from "./7_forms";
import EjemploRedux from "./8_redux/5_redux";
import { StyleCSS, StyleObject, StyleCssFile, StyleModuleCssFile } from "./9_css";
import NetworkCall from "./10_network";
import { HooksToggle, HooksClock } from "./11_hooks_eventos";
import HooksNetworkCall from "./12_hooks_network";

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
        <Link to="/redux">Redux </Link><br />
        <Link to="/css">Estilos CSS </Link><br />
        <Link to="/network">Acceso a red</Link><br />
        <Link to="/hooks">Hooks</Link><br />
        <Link to="/hooksNet">Hooks NetworkCall</Link><br />


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
            <NameForm />
          </Route>
          <Route path="/redux">
            <EjemploRedux />
          </Route>
          <Route path="/css">
            <div>
              <StyleCSS />
              <StyleObject />
              <StyleCssFile />
              <StyleModuleCssFile />
            </div>
          </Route>
          <Route path="/network">
            <NetworkCall />
          </Route>
          <Route path="/hooks">
            <div>
              <HooksToggle />
              <HooksClock />
            </div>
          </Route>
          <Route path="/hooksNet">
            <div>
              <HooksNetworkCall />
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
  <App />,
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
