import React from "react";
import Navbar from "./Navbar";

function Layout(props) {
  return ( /* Bien, tenemos que cada que renderizamos un componente o en este caso una funcion (cuando nos referimos a react router) creamos un div padre y ahi ponemos nuestros demas elementos, esto es asi porque return solo puede retornar UN SOLO elemento, de lo contrario causa error, sin embargo esto causa diviitis en nuestra pagina creando divs de divs inecesarios y haciendo dificil su lectura, para corregir eso podemos sustituir esos mismo div padre por React.fragment, este metodo nos permitira crear ese mismo elemento padre necesario pero en este caso no se vera reflejado como elemento html, sino que sera imaginario */
    <React.Fragment>
      <Navbar />
      {props.children} {/* Asi nos aseguramos que renderice sus hijos, es decir el resto de componentes de nuestro react router */}
    </React.Fragment>
  );
}

export default Layout;
