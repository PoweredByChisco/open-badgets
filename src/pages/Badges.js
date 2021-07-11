import React from "react";

import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";
import BadgesList from "../components/BadgesList";
import { Link } from "react-router-dom";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import api from "../api";
import Miniloader from "../components/Miniloader";

class Badges extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount() {
    this.fetchData();

    this.intervalId = setInterval(
      this.fetchData,
      10000
    ); /* define un intervalo donde se ejecutarael primer argumento */
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  fetchData = async () => {
    this.setState({
      loading: true,
      error: null,
    }); /* Volvemos a declarar el loading true por si volvemos en el futuro a utilizar fetchData */

    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    /* Como vemos hacemos un manejo por cada estado de la peticion */
    if (this.state.loading === true && !this.state.data) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    } /* Elegimos que hacer en caso de que ocurra un error */

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img src={confLogo} alt="" className="Badges_conf-logo" />
            </div>
          </div>
        </div>

        <div className="Badge__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>
          <div className="Badges__list">
            <div className="Badges__container">
              <BadgesList badges={this.state.data} />
              {this.state.loading && <Miniloader />}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
