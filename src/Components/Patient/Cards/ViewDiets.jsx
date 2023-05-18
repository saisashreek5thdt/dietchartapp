import React from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import nutrition from "../../../Assets/images/Services/nutritionist.png"

const ViewDiets = () => {
  return (
    <>
      <div className="cards__Container">
        <Link to="/dashboard/patient/">
        <Card
          className="cards__Img"
          imgSrc={nutrition}
        >
          <h5 className="cards__Title">Diet Chart</h5>
        </Card>
        </Link>
      </div>
    </>
  );
};

export default ViewDiets;
