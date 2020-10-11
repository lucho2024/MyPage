import React, { useState } from "react";
import { Card, CardImg, Media, CardBody } from "reactstrap";
import { INFORMATION } from "../shared/myInformation";

const Home = () => {
  const [information, setInformation] = useState(INFORMATION);
  return (
    <div className="container">
      <div className="col-12">
        <h3>About me</h3>
        <hr />
      </div>
      <div className="row">
        <div className="col-12 col-md-4">
          <Card>
            <CardImg width="100%" src="/assets/images/ieee.jpeg" />
          </Card>
        </div>
        <div className="col-12 col-md-8">
          <p>
            I am a systems engineering student at the Santiago de Cali
            University, I am currently linked to the Comba + ID research group
            and I am an active member of the IEEE and IEEE computer society, I
            am 23 years old, throughout my life I have considered a person who
            likes to take on many personal or work challenges and I am also a
            lover of programming in its novice phase with a lot of desire to
            learn new things.
          </p>
          <hr></hr>
          <div className="col-12">
            <Card>
              <CardBody className="bg-faded">
                <blockquote className="blockquote">
                  <footer className="blockquote-footer">
                    <cite title="Source Title">
                      In this photograph we are representing the Santiago de
                      Cali University in the annual event of the IEEE Colombia
                      called Colcom and Colcaci that took place at the
                      Universidad del Norte in Barranquilla, in the photograph
                      we meet the director of our research laboratory and one of
                      the leaders of the agreement that the USC has with China.
                    </cite>
                  </footer>
                </blockquote>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
