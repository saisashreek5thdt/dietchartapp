/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";
import {
    AddCaseStudy,
    ViewCaseStudy,
    CreatePrescription,
    ViewPrescriptions,
    CreateDietCharts,
    ViewDietCharts,
} from "../index";

const PatientAttachement = () => {
    return (
        <>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Attachments
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    <ul
                        role="list"
                        className="divide-y divide-gray-200 rounded-md border border-gray-200"
                    >
                        <AddCaseStudy />
                        <CreatePrescription />
                        <CreateDietCharts />
                        <ViewCaseStudy />
                        <ViewPrescriptions />
                        <ViewDietCharts />
                    </ul>
                </dd>
            </div>
        </>
    );
};

export default PatientAttachement;
