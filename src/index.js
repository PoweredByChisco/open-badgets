import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css' //De nuevo webpack se hace cargo de la localizacion de esto, antes lo instalamos con npm
import './global.css' /* Este archivo css aplica estilos globales a la app */

import App from './components/App'

const container = document.getElementById('app')

ReactDOM.render(<App/>, container) 
//Aunque sea un componente, lo pasamos a manera de elemento (es por eso que lo etiquetamos, porque es elemento)
