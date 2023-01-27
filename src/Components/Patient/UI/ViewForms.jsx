import React from "react";
import { PatientNav, PatientFoot, FormTabs } from "../index";

const ViewForms = () => {
  return (
    <>
      <PatientNav />
      <main>
        <div className="dashboard__Container">
          <FormTabs />
        </div>
      </main>
      <PatientFoot />
    </>
  );
};

export default ViewForms;
