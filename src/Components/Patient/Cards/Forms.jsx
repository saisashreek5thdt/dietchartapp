import React from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import forms from "../../../Assets/images/Services/forms.jpg";

const Forms = () => {
  return (
    <>
      <div className="cards__Container">
        <Link to="/view/patient/forms/">
          <Card
            className="cards__Img"
            imgSrc={forms}
          >
            <h5 className="cards__Title"> Forms</h5>
          </Card>
        </Link>
      </div>
    </>
  );
};

export default Forms;
