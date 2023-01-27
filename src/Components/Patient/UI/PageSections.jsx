import React from "react";
import { Forms, ViewDiets, Prescriptions, Count, Appointment } from "../index";

const PageSections = () => {
  return (
    <>
      <div className="dashboard__Container">
        <div className="dashboard__Grids">
          <Forms />
          <ViewDiets />
          <Prescriptions />
          <Appointment />
          <Count />
        </div>
      </div>
    </>
  );
};

export default PageSections;
