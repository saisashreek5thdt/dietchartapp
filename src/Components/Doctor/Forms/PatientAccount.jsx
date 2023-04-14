import React from "react";

const PatientAccount = () => {
    return (
        <>
            <div className="info__Data--BG-1 info__Data--Grid">
                <dt className="info__Heading--Primary">Status</dt>
                <dd className="info__Heading--Text info__Heading--Active">
                    Active
                </dd>
            </div>
            <div className="info__Data--BG-2 info__Data--Grid">
                <dt className="info__Heading--Primary">
                    Created Date
                </dt>
                <dd className="info__Heading--Text info__Heading--Regular">
                    19-01-2023
                </dd>
            </div>
            <div className="info__Data--BG-1 info__Data--Grid">
                <dt className="info__Heading--Primary">
                    Patient ID
                </dt>
                <dd className="info__Heading--Text info__Heading--Regular">
                    DCAPID/20230119/0001
                </dd>
            </div>
        </>
    );
};

export default PatientAccount;
