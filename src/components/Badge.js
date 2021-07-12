import React from "react";
import confLogo from "../images/conf-logo.png";
//Esto de guardar la direccion en un importado es algo que hace webpack y react automaticamente, para despues mandarlo a llamar entre llaves donde se necesite. Apunte aqui: ya que si consultamos el codigo con nuestra extension react en chrome primero; veremos que se genera un html completo (porque eso es un componente, es como toda una pagina html completa dentro de la aplicacion react) y segundo veremos que nuestra direccion a donde se refiere la imagen directamente ya aparece con la direccion designada, solo que con otra extension, esto lo hace react automaticamente para optimizar nuestros importados
import "./styles/Badge.css";
//De esto tambien se encarga webpack, sabe de entrada como instalarlo en nuestra app
import Gravatar from "./Gravatar";

class Badge extends React.Component {
  render() {
    /* Todos los componentes necesitan obligatoriamente este metodo, el cual nos define el resultado en la pantalla */

    return (
      <div className="Badge">
        {" "}
        {/* En react hablamos de className en vez de class porque es una palabra reservada para JavaScript */}
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
          {/* Esto se llama props */}
        </div>
        <div className="Badge__section-name">
          <Gravatar className="Badge__avatar" email={this.props.email} />
          {/* Gravatar es un recurso externo que te representa a traves de una imagen con URL del sitio */}
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>{this.props.role}</h3>
          <div>@{this.props.twitter}</div>
        </div>
        <div className="Badge__footer">#platziconf</div>
      </div>
    );
  }
}

export default Badge;
