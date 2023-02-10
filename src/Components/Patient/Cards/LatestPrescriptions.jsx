import React from "react";
import { Card } from "flowbite-react";
import Close from "../UI/Close";

const LatestPrescriptions = () => {
    return (
        <>
            <div className="cards__Container">
                <Card className="cards__Img">
                    <div className="cards__Flex--Col">
                        <h5 className="cards__Title">Prescriptions</h5>
                        <div className="cards__Flex--Box">
                            <button
                                type="button"
                                className="cards__Flex--New"
                                data-modal-target="newPrescriptionsModal"
                                data-modal-toggle="newPrescriptionsModal"
                            >
                                View Latest Prescriptions
                            </button>
                        </div>
                    </div>
                </Card>
            </div>
            <div
                id="newPrescriptionsModal"
                data-modal-backdrop="static"
                tabIndex="-1"
                aria-hidden="true"
                className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
            >
                <div className="modal__Box">
                    <div className="modal__Box--Inner">
                        <div className="modal__Box--Header">
                            <h2 className="modal__Header--Title">
                                New Prescribed Medicines List
                            </h2>
                            <button
                                type="button"
                                className="modal__Header--Close"
                                data-modal-hide="newPrescriptionsModal"
                            >
                                <Close />
                            </button>
                        </div>
                        <div className="modal__Body">
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                Modal Body Part
                            </p>
                        </div>
                        <div className="modal__Footer">
                            <button
                                data-modal-hide="newPrescriptionsModal"
                                type="button"
                                className="modal__Footer--Btn-Accept"
                            >
                                Okay
                            </button>
                            <button
                                data-modal-hide="newPrescriptionsModal"
                                type="button"
                                className="modal__Footer--Btn-Reject"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LatestPrescriptions;
