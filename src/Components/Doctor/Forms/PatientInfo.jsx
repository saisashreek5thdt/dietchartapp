import React from "react";
import { PatientData, PatientAttachement } from "../index";

const PatientInfo = () => {
  return (
    <>
      <div className="overflow-hidden bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Applicant Information
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Patient details and application.
          </p>
        </div>
        <div className="border-t border-gray-200">
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
