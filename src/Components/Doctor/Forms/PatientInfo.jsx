import React from "react";
import { PatientData, PatientAttachement } from "../index";

const PatientInfo = () => {
  return (
    <>
      <div className="info__Flow">
        <div className="info__Flow--Space">
          <h3 className="info__Heading--Primary">
            Applicant Information
          </h3>
          <p className="info__Heading--Secondary">
            Patient details and application.
          </p>
        </div>
        <div className="info__Border">
          <dl>
            <PatientData />
            <PatientAttachement />
          </dl>
        </div>
      </div>
    </>
  );
};

export default PatientInfo;
