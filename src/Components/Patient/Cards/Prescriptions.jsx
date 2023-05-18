import React from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import prescriptions from "../../../Assets/images/Services/prescriptions.jpg"

const Prescriptions = () => {
  return (
    <>
      <div className="cards__Container">
        <Link to="/view/patient/prescriptions/">
          <Card
            className="cards__Img"
            imgSrc={prescriptions}
          >
            <h5 className="cards__Title">Prescriptions</h5>
          </Card>
        </Link>
      </div>
    </>
  );
};

export default Prescriptions;
