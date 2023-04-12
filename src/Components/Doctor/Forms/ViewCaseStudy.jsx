import React from "react";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { Link } from "react-router-dom";

const ViewCaseStudy = () => {
    return (
        <>
            <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                <div className="flex w-0 flex-1 items-center">
                    <HiOutlineNewspaper
                        className="h-5 w-5 flex-shrink-0 text-gray-400"
                        aria-hidden="true"
                    />
                    <span className="ml-2 w-0 flex-1 truncate">
                        Read Case Study Info
                    </span>
                </div>
                <div className="ml-4 flex-shrink-0">
                    <Link
                        to="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                        View Case Studies
                    </Link>
                </div>
            </li>
        </>
    );
};

export default ViewCaseStudy;
