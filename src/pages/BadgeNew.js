import React from "react";
import "./styles/BadgeNew.css";
import header from "../images/platziconf-logo.svg";
import BadgeForm from "../components/BadgeForm";
import Badge from "../components/Badge";
import api from "../api";
import PageLoading from "../components/PageLoading";

class BadgeNew extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    },
  }; //Manejo de estado

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form, //Con este spread operator dejamos caer todos los valores a este metodo
        [e.target.name]: e.target.value, //Y luego añadimos un elemento nuevo, o tal vez sobreescribimos uno ya exitente depende el caso
      },
    }); //Para hacer el levantamiento de estado
  };

  handleSubmit = async (e) => {
    e.preventDefault(); /* Para evitar que se ejecute el submit */
    this.setState({ loading: true, error: null });

    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false });

      this.props.history.push(
        "/badges"
      ); /* Las paginas reciben 3 props a traves de react router. Match, history y location, en este caso con history podemos redirigir a una pagina */
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img
            className="BadgeNew__hero-image img-fluid"
            src={header}
            alt="Logo"
          />
        </div>

        <div className="container">
          {/* Haciendo uso de bootstrap */}
          <div className="row">
            <div className="col">
              <Badge
                firstName={
                  this.state.form.firstName || "FIRST_NAME"
                } /* De esta manera podemos asignar un valor por omision */
                lastName={this.state.form.lastName || "LAST_NAME"}
                twitter={this.state.form.twitter || "TWITTER"}
                role={this.state.form.jobTitle || "JOB_TITLE"}
                email={this.state.form.email || "EMAIL"}
                avatarUrl="º" /* Esto son props */
              />
            </div>

            <div className="form-container col">
              <h1>New Attendant</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
              {/* Creamos una propiedad para que esta se pueda escribir desde el componente BadgeForm */}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
