import React from "react";

import Badge from "./Badge";
import confLogo from "../images/platziconf-logo.svg";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom"
import Modal from "./Modal";

function BadgeDetails(props) {
  const badge = props.badge;

  return (
    <React.Fragment>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={confLogo} alt="Logo de la conferencia" />
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {" "}
        {/* Renderizamos nuestra pagina con ayuda de Bootstrap */}
        <div className="row">
          <div className="col">
            <Badge
              firstName={badge.firstName}
              lastName={badge.lastName}
              twitter={badge.twitter}
              role={badge.jobTitle}
              email={badge.email}
            />
          </div>
          <div className="col">
            <h2>Actions</h2>
            <div>
              <div>
                <Link
                  className="btn btn-primary mb-4"
                  to={`/badges/${badge.id}/edit`}
                >
                  Edit
                </Link>
              </div>
            </div>

            <div>
              <button className="btn btn-danger">Delete</button>
              <Modal isOpen={true}/>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BadgeDetails;
