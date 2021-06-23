import React, { Component } from "react";

import "./styles/Loader.css";

export default class Miniloader extends Component {
  render() {/* Aunque este lleno de divs, esto es porque estamos haciendo una animacion CSS para renderizar en hijos diferentes parpadeos de los puntos de carga */
    return ( 
      <div className="lds-grid">
        <div />
        <div />
        <div />
      </div>
    );
  }
}
