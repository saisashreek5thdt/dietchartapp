import React, { useState } from "react";
import { Card, Modal } from "flowbite-react";
// eslint-disable-next-line
import Close from "../UI/Close";

const OldPrescriptions = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleModalOpen = () => {
        setModalIsOpen(true);
    };

    return (
        <>
            <div className="cards__Container">
                <Card className="cards__Img">
                    <div className="cards__Flex--Col">
                        <h5 className="cards__Title">Prescriptions</h5>
                        <div className="cards__Flex--Box">
                            {/* <button
                                type="button"
                                className="cards__Flex--Old"
                                data-modal-target="oldPrescriptionModal"
                                data-modal-toggle="oldPrescriptionModal"
                            >
                                View Old Prescriptions
                            </button> */}
                            <React.Fragment>
                                <button
                                    type="button"
                                    className="cards__Flex--Old"
                                    onClick={handleModalOpen}
                                >
                                    View Old Prescriptions
                                </button>
                                <Modal
                                    show={modalIsOpen}
                                    onClose={() => setModalIsOpen(false)}
                                >
                                    <Modal.Header>
                                        View Old Prescriptions
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="space-y-6">
                                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                View Old Prescriptions
                                            </p>
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <button
                                            type="button"
                                            className="modal__Footer--Btn-Accept"
                                            onClick={() =>
                                                setModalIsOpen(false)
                                            }
                                        >
                                            Okay
                                        </button>
                                        <button
                                            type="button"
                                            className="modal__Footer--Btn-Reject"
                                            onClick={() =>
                                                setModalIsOpen(false)
                                            }
                                        >
                                            Close
                                        </button>
                                    </Modal.Footer>
                                </Modal>
                            </React.Fragment>
                        </div>
                    </div>
                </Card>
            </div>
            {/* <div
                id="oldPrescriptionModal"
                data-modal-backdrop="oldPrescriptionModal"
                tabIndex="-1"
                aria-hidden="true"
                className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
            >
                <div className="modal__Box">
                    <div className="modal__Box--Inner">
                        <div className="modal__Box--Header">
                            <h2 className="modal__Header--Title">
                                Old Prescriptions List
                            </h2>
                            <button
                                type="button"
                                className="modal__Header--Close"
                                data-modal-hide="oldPrescriptionModal"
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
                                data-modal-hide="oldPrescriptionModal"
                                type="button"
                                className="modal__Footer--Btn-Accept"
                            >
                                Okay
                            </button>
                            <button
                                data-modal-hide="oldPrescriptionModal"
                                type="button"
                                className="modal__Footer--Btn-Reject"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default OldPrescriptions;
