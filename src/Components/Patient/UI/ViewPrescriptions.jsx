import React from "react";
import {
    PatientNav,
    PatientFoot,
    LatestPrescriptions,
    OldPrescriptions,
} from "../index";

const ViewPrescriptions = () => {
    return (
        <>
            <PatientNav />
            <main>
                <div className="dashboard__Container">
                    <div className="dashboard__Grids">
                        <LatestPrescriptions />
                        <OldPrescriptions />
                    </div>
                </div>
            </main>
            <PatientFoot />
        </>
    );
};

export default ViewPrescriptions;
