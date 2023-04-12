import React from "react";
import { HiTableCells } from "react-icons/hi2";
import { Link } from "react-router-dom";

const ViewPrescriptions = () => {
    return (
        <>
            <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                <div className="flex w-0 flex-1 items-center">
                    <HiTableCells
                        className="h-5 w-5 flex-shrink-0 text-gray-400"
                        aria-hidden="true"
                    />
                    <span className="ml-2 w-0 flex-1 truncate">
                        Prescriptions
                    </span>
                </div>
                <div className="ml-4 flex-shrink-0">
                    <Link
                        to="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                        View Prescriptions
                    </Link>
                </div>
            </li>
        </>
    );
};

export default ViewPrescriptions;
