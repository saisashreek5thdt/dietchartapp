import React from "react";
import {
    PatientAccount,
    PatientPersonal,
    PatientCaretaker,
    PatientPayment,
} from "../index";

const PatientData = () => {
    return (
        <>
            <PatientAccount />
            <PatientPersonal />
            <PatientCaretaker />
            <PatientPayment />
        </>
    );
};

export default PatientData;
