import React, { useState } from "react";
import { Card, CardBody, CardText, CardImg, CardTitle } from "reactstrap";
import { SKILLS } from "../shared/skills";

function RenderSkill({ skills }) {
  const myskills = skills.map((skill) => {
    return (
      <div className="col-12 col-md-4">
        <Card>
          <CardImg src={skill.image} alt={skill.name} height="200" />
          <CardBody>
            <strong>
              <CardTitle>
                {skill.name}--{skill.level}
              </CardTitle>
            </strong>
            <CardText>{skill.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  });
  return myskills;
}

function Skill() {
  const [skills, setSkill] = useState(SKILLS);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3>My skills</h3>
          <hr></hr>
        </div>
        <RenderSkill skills={skills} />
      </div>
    </div>
  );
}

export default Skill;
