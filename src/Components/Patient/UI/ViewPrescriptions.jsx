import React, { useState } from "react";
import { PatientNav, PatientFoot } from "../index";
import { Card, Button } from "flowbite-react";

const ViewPrescriptions = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <PatientNav />
            <main>
                <div className="dashboard__Container">
                    <div className="dashboard__Grids">
                        <div className="cards__Container">
                            <Card className="cards__Img">
                                <div className="cards__Flex--Col">
                                    <h5 className="cards__Title">
                                        Prescriptions
                                    </h5>
                                    <div className="cards__Flex--Box">
                                        <Button
                                            className="cards__Flex--Paid"
                                            onClick={() => setShowModal(true)}
                                        >
                                            View Latest Prescriptions
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>
            <PatientFoot />
            {showModal ? (
                <>
                    
                </>
            ) : null}
        </>
    );
};

export default ViewPrescriptions;
