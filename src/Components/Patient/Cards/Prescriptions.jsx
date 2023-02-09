import React from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const Prescriptions = () => {
  return (
    <>
      <div className="cards__Container">
        <Link to="/view/patient/prescriptions/">
          <Card
            className="cards__Img"
            imgSrc="https://img.freepik.com/free-vector/manager-prioritizing-tasks-list_74855-5272.jpg?w=1380&t=st=1674818013~exp=1674818613~hmac=8e0a53788a05846fdc3354e2ff44a242b616a19e151b940e14bf6d39fc41ab70"
          >
            <h5 className="cards__Title">Prescriptions</h5>
          </Card>
        </Link>
      </div>
    </>
  );
};

export default Prescriptions;
