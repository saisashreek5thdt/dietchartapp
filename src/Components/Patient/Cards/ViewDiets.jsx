import React from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const ViewDiets = () => {
  return (
    <>
      <div className="cards__Container">
        <Card
          className="cards__Img"
          imgSrc="https://img.freepik.com/free-vector/nutritionist-concept-nutrition-therapy-with-healthy-food-physical-activity-weight-loss-program-diet-concept-vector-illustration-cartoon-style_613284-1316.jpg?w=1380&t=st=1674024968~exp=1674025568~hmac=7bc86e59ffcfee04a1cf91e1b1ec5bb6e1087c0054c0aa8f949798ae1c89cadf"
        >
          <h5 className="cards__Title">Diet Chart</h5>
        </Card>
      </div>
    </>
  );
};

export default ViewDiets;
