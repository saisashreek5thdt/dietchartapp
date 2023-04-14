import React from "react";
import { Collapse, initTE } from "tw-elements";
import { ViewLatestPrescription } from "../index";

const ViewOldPrescriptions = () => {
    initTE({ Collapse });
    return (
        <>
            {/* 
            <Accordion>
                <Accordion.Panel>
                    <Accordion.Title>
                        Dr. Suha Chandramouli - 20/02/2023
                    </Accordion.Title>
                    <Accordion.Content>
                        <ViewLatestPrescription />
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>Dr. DSN Rao - 25/02/2023</Accordion.Title>
                    <Accordion.Content>
                        <ViewLatestPrescription />
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
             */}
            <div id="prescriptions">
                <div className="accordian__Border">
                    <h2 className="mb-0" id="headingOne">
                        <button
                            className="group relative accordian__Button"
                            type="button"
                            data-te-collapse-init
                            data-te-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            Dr. Suha Chandramouli - 20/02/2023
                            <span className="accordian__Button--Span">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            </span>
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="!visible"
                        data-te-collapse-item
                        data-te-collapse-show
                        aria-labelledby="headingOne"
                        data-te-parent="#prescription"
                    >
                        <div className="px-5 py-4">
                            <ViewLatestPrescription />
                        </div>
                    </div>
                </div>
                <div className="accordian__Border">
                    <h2 className="mb-0" id="headingTwo">
                        <button
                            className="group relative accordian__Button"
                            type="button"
                            data-te-collapse-init
                            data-te-target="#collapseTwo"
                            aria-expanded="true"
                            aria-controls="collapseTwo"
                        >
                            Dr. DSN Rao - 25/02/2023
                            <span className="accordian__Button--Span">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            </span>
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="!visible"
                        data-te-collapse-item
                        data-te-collapse-show
                        aria-labelledby="headingTwo"
                        data-te-parent="#prescription"
                    >
                        <div className="px-5 py-4">
                            <ViewLatestPrescription />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ViewOldPrescriptions;
