import React from "react";

const PatientPersonal = () => {
    return (
        <>
            <div className="info__Data--BG-2 info__Data--Grid">
                <dt className="info__Heading--Primary">Full name</dt>
                <dd className="info__Heading--Text info__Heading--Regular">
                    Aneesh Kapoor
                </dd>
            </div>
            <div className="info__Data--BG-1 info__Data--Grid">
                <dt className="info__Heading--Primary">
                    Patient Age
                </dt>
                <dd className="info__Heading--Text info__Heading--Regular">
                    48
                </dd>
            </div>
            <div className="info__Data--BG-2 info__Data--Grid">
                <dt className="info__Heading--Primary">
                    Email address
                </dt>
                <dd className="info__Heading--Text info__Heading--Regular">
                    aneesh.k@gmail.com
                </dd>
            </div>
            <div className="info__Data--BG-1 info__Data--Grid">
                <dt className="info__Heading--Primary">
                    Patient Height
                </dt>
                <dd className="info__Heading--Text info__Heading--Regular">
                    6.5
                </dd>
            </div>
            <div className="info__Data--BG-2 info__Data--Grid">
                <dt className="info__Heading--Primary">
                    Patient Weight
                </dt>
                <dd className="info__Heading--Text info__Heading--Regular">
                    72
                </dd>
            </div>
        </>
    );
};

export default PatientPersonal;
