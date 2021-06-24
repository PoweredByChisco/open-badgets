import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"; //Tenemos que importar todas las propiedades, es decir en este caso la etiqueta
import Layout from "./Layout";
import BadgeNew from "../pages/BadgeNew";
import Badges from "../pages/Badges";
import NotFound from "../pages/NotFound";
import BadgeEdit from "../pages/BadgeEdit"
import BadgeDetails from "../pages/BadgeDetailsContainer"

function App() {
  return (
      <BrowserRouter>
        {/* Nuestro elemento principal solamente debe de tener un solo hijo */}
        <Layout> {/* Layout es un componente que renderizara lo mismo en todas las paginas */}
          <Switch>
            {/* Similar al Switch de programacion, hace que solo eligamos una ruta, en las rutas importa el orden */}
            <Route exact path="/badges" component={Badges} />{" "}
            {/* Seran nuestros directorios, tiene exact path porque de otra manera el switch se confundira y abrira otra ruta ya que badges y badges/new coinciden al inicio */}
            <Route exact path="/badges/new" component={BadgeNew} />
            <Route exact path="/badges/:badgeId" component={BadgeDetails} />
            <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} /> {/* El badgeId es una variable, la cual si estara definida en nuestra URL pero sera variable, sera un valor generico, mas adelante la modificaremos*/}
            <Route component={NotFound}/>
          </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
