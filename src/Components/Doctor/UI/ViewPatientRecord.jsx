import React from "react";
import { DocNav, DocFooter } from "../../Dashboard/index";
import { PatientInfo } from "../index";

const ViewPatientRecord = () => {
  return (
    <>
      <DocNav />
      <main>
        <div className="dashboard__Container">
          <a
            href="/view/patients/all/records/"
            className="text-xl font-medium text-blue-600 hover:text-blue-500"
          >
            Back
          </a>
          <PatientInfo />
        </div>
      </main>
      <DocFooter />
    </>
  );
};

export default ViewPatientRecord;
