import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Link, Outlet, Route, Routes
} from "react-router-dom";
import NetworkCall from "./10_network";
import { HooksClock, HooksToggle } from "./11_hooks_eventos";
import HooksNetworkCall from "./12_hooks_network";
import HelloJSXSample from "./1_hello";
import HelloClassSample from "./2_hello_class";
import Expresiones from "./3_expresiones";
import Clock from "./4_clock";
import { ActionLink, Toggle } from "./5_eventos";
import { NumberList, NumberList2 } from "./6_tips";
import { NameForm } from "./7_forms";
import EjemploRedux from "./8_redux/5_redux";
import { StyleCSS, StyleCssFile, StyleModuleCssFile, StyleObject } from "./9_css";

export default function App() {
  return (
    <BrowserRouter>
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

        <Routes>
          <Route path="/helloFunc" element={<HelloJSXSample />} />
          <Route path="/helloClass" element={<HelloClassSample />} />
          <Route path="/expresions" element={<Expresiones />} />
          <Route path="/estado" element={<Clock />} />
          <Route path="/eventos" element={
            <div>
              <ActionLink />
              <Toggle />s
            </div>
          } />
          <Route path="/tips" element={
            <div>
              <NumberList />
              <NumberList2 numbers={[1, 2, 3]} />
            </div>
          } />
          <Route path="/forms" element={<NameForm />} />
          <Route path="/redux" element={<EjemploRedux />} />
          <Route path="/css" element={
            <div>
              <StyleCSS />
              <StyleObject />
              <StyleCssFile />
              <StyleModuleCssFile />
            </div>
          } />
          <Route path="/network" element={<NetworkCall />} />
          <Route path="/hooks" element={
            <div>
              <HooksToggle />
              <HooksClock />
            </div>
          } />
          <Route path="/hooksNet" element={
            <div>
              <HooksNetworkCall />
            </div>
          } />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>

      <Outlet />
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />

  </React.StrictMode>
);

/**
 * Render renderiza un elemento en la pantalla,
 * Podemos usar render cuantas veces queramos, de hecho cada vez que reemplazadmos
 * un elemento em pantalla o lo actualizamos, se renderiza de forma similar.
 * Se genera el elemento completo y se compara con el que esta en pantalla actualizando los cambios
 */

function Home() {
  return <h2>Home</h2>;
}
