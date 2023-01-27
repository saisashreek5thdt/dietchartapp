import React from "react";
import {
  PatientNav,
  PatientFoot,
  PageSections,
} from "../../Components/Patient/index";

const Patientboard = () => {
  return (
    <>
      <PatientNav />
      <main>
        <PageSections />
      </main>
      <PatientFoot />
    </>
  );
};

export default Patientboard;
