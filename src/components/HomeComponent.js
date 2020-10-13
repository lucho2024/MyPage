import React, { useState } from "react";
import { Card, CardImg, Media, CardBody } from "reactstrap";
import { INFORMATION } from "../shared/myInformation";

function RenderMy({ information }) {
  return (
    <div className="row">
      <div className="col-12 col-md-4">
        <Card>
          <CardImg width="100%" src={information[0].image} />
        </Card>
      </div>
      <div className="col-12 col-md-8">
        <h3 className="text-center">{information[0].name}</h3>
        <hr></hr>
        <p>{information[0].aboutme}</p>
        <hr></hr>
        <div className="col-12">
          <Card>
            <CardBody className="bg-faded">
              <blockquote className="blockquote">
                <footer className="blockquote-footer">
                  <cite title="Source Title">{information[0].description}</cite>
                </footer>
              </blockquote>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
function RenderBriseit({ information }) {
  return (
    <div className="row">
      <div className="col-12 col-md-8">
        <div className="col-12">
          <Card>
            <CardBody className="bg-faded">
              <blockquote className="blockquote">
                <footer className="blockquote-footer">
                  <cite title="Source Title">{information[1].description}</cite>
                </footer>
              </blockquote>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="col-12 col-md-4">
        <Card>
          <CardImg width="100%" src={information[1].image} />
        </Card>
      </div>
    </div>
  );
}
const Home = () => {
  const [information, setInformation] = useState(INFORMATION);
  return (
    <div className="container">
      <div className="col-12">
        <h3>About me</h3>
        <hr />
      </div>
      <RenderMy information={information} />
      <div className="col-12">
        <h3>{information[1].name}</h3>
        <hr />
      </div>
      <RenderBriseit information={information} />
    </div>
  );
};

export default Home;
