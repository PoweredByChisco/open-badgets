import React from "react";
import "./styles/BadgeForm.css"

class BadgeForm extends React.Component {
  handleClick = (e) => {
    console.log("Button was click");
  };

  handleSubmit = (e) => {
    e.preventDefault(); //Previene que el submit se ejecute
    console.log(this.state);
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.props.onSubmit} action="">
          <div className="form-group">
            {" "}
            {/* Aplicamos Bootstrap */}
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName} //Esto hace que controlemos nuestro estado, state es para leer el estado mientras que setState lo escribimos
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email}
            />
          </div>

          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
            />
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
            />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary mb-10">
            Save
          </button>

          {this.props.error && (
            <p className="text-danger">{this.props.error.message}</p>
          )}
        </form>
      </React.Fragment>
    );
  }
}

export default BadgeForm;
