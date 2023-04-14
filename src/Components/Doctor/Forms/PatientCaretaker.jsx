import React from "react";

const PatientCaretaker = () => {
    return (
        <>
            <div className="info__Data--BG-1 info__Data--Grid">
                <dt className="info__Heading--Primary">
                    Caretaker Name
                </dt>
                <dd className="info__Heading--Text info__Heading--Regular">
                    Akhilesh Kapoor
                </dd>
            </div>
            <div className="info__Data--BG-2 info__Data--Grid">
                <dt className="info__Heading--Primary">
                    Caretaker Relation
                </dt>
                <dd className="info__Heading--Text info__Heading--Regular">
                    Father
                </dd>
            </div>
            <div className="info__Data--BG-1 info__Data--Grid">
                <dt className="info__Heading--Primary">
                    Caretaker Phone Number
                </dt>
                <dd className="info__Heading--Text info__Heading--Regular">
                    (+91) - 994 - 488 - 3647
                </dd>
            </div>
            <div className="info__Data--BG-2 info__Data--Grid">
                <dt className="info__Heading--Primary">
                    Caretaker Email ID
                </dt>
                <dd className="info__Heading--Text info__Heading--Regular">
                    akhilesh.k@gmail.com
                </dd>
            </div>
        </>
    );
};

export default PatientCaretaker;
