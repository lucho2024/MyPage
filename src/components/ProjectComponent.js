import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { PROJECTS } from "../shared/projects";

function RenderProject({ project }) {
  const pro = project.map((proje) => {
    return (
      <div className="col-12 col-md-4 offset-1" key={proje.id}>
        <Card>
          <CardImg src={proje.image} alt={proje.name} />
          <CardBody>
            <strong>
              <CardTitle>{proje.name}</CardTitle>
            </strong>
            <CardText>{proje.description}</CardText>
            <div className="row">
              <a
                type="button"
                className="btn btn-primary offset-4 "
                href={proje.link}
                target="_blank"
              >
                Go to Link
              </a>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  });
  return pro;
}

const Project = () => {
  const [projects, setProjects] = useState(PROJECTS);

  return (
    <div className="container">
      <h4>My projects</h4>

      <hr></hr>
      <div className="row">
        <RenderProject project={projects} />
      </div>
    </div>
  );
};

export default Project;
