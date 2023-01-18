import React from "react";
import { DocNav } from "../../Components/Dashboard/";
import { Card } from "flowbite-react";
import { BiRupee } from "react-icons/bi";

import { userPlans } from "../../Data/data";

// let array = [];
// let plans;
// const activeFeature = plans.activeFeatures.map((active) => (
//   <li className="flex space-x-3">
//     <svg
//       className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
//       fill="currentColor"
//       viewBox="0 0 20 20"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         fillRule="evenodd"
//         d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//         clipRule="evenodd"
//       />
//     </svg>
//     <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
//       {active}
//     </span>
//   </li>
// ));

// const normalFeature = plans.noFeatures.map((nofee) => (
//   <li className="flex space-x-3 line-through decoration-gray-500">
//     <svg
//       className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
//       fill="currentColor"
//       viewBox="0 0 20 20"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         fillRule="evenodd"
//         d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//         clipRule="evenodd"
//       />
//     </svg>
//     <span className="text-base font-normal leading-tight text-gray-500">
//       {nofee}
//     </span>
//   </li>
// ));

const UserPlan = () => {
  return (
    <>
      <DocNav />
      <div className="mx-auto max-w-2xl py-2 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
          {userPlans.map((plans) => (
            <div className="max-w-sm" key={plans.id}>
              <Card>
                <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
                  {plans.plantype}
                </h5>
                <div className="flex items-baseline text-gray-900 dark:text-white">
                  <span className="text-3xl font-semibold">
                    <BiRupee />
                  </span>
                  <span className="text-5xl font-extrabold tracking-tight">
                    {plans.price}
                  </span>
                  <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                    /month
                  </span>
                </div>
                <ul role="list" className="my-7 space-y-5">
                  <li className="flex space-x-3">
                    <svg
                      className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                      {plans.feature_1}
                    </span>
                  </li>
                  <li className="flex space-x-3 line-through decoration-gray-500">
                    <svg
                      className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500">
                      {plans.feature_7}
                    </span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-lg font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
                >
                  Cuurent plan
                </button>
              </Card>
            </div>
          ))}

          {/* <div className="max-w-sm">
            <Card>
              <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
                Regular plan
              </h5>
              <div className="flex items-baseline text-gray-900 dark:text-white">
                <span className="text-3xl font-semibold">
                  <BiRupee />
                </span>
                <span className="text-5xl font-extrabold tracking-tight">
                  500
                </span>
                <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                  /month
                </span>
              </div>
              <ul role="list" className="my-7 space-y-5">
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    For Clinics
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    100 Patients
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    20+ users
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    1 ~ 50 Forms Overall
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500">
                    1 ~ 28 Diet Charts Overall
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500">
                    Email Support
                  </span>
                </li>
                <li className="flex space-x-3 line-through decoration-gray-500">
                  <svg
                    className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500">
                    Complete documentation
                  </span>
                </li>
                <li className="flex space-x-3 line-through decoration-gray-500">
                  <svg
                    className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500">
                    24×7 phone
                  </span>
                </li>
              </ul>
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-lg font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
              >
                Cuurent plan
              </button>
            </Card>
          </div>
          <div className="max-w-sm">
            <Card>
              <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
                Standard plan
              </h5>
              <div className="flex items-baseline text-gray-900 dark:text-white">
                <span className="text-3xl font-semibold">
                  <BiRupee />
                </span>
                <span className="text-5xl font-extrabold tracking-tight">
                  950
                </span>
                <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                  /month
                </span>
              </div>
              <ul role="list" className="my-7 space-y-5">
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    For Clinics & Single Dieticians
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    100 Patients
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    20+ users
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    1 ~ 50 Forms Overall
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500">
                    1 ~ 28 Diet Charts Overall
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500">
                    Email Support
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500">
                    Complete documentation
                  </span>
                </li>
                <li className="flex space-x-3 line-through decoration-gray-500">
                  <svg
                    className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500">
                    24×7 phone
                  </span>
                </li>
              </ul>
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
              >
                Choose plan
              </button>
            </Card>
          </div>
          <div className="max-w-sm">
            <Card>
              <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
                Standard plan
              </h5>
              <div className="flex items-baseline text-gray-900 dark:text-white">
                <span className="text-3xl font-semibold">
                  <BiRupee />
                </span>
                <span className="text-5xl font-extrabold tracking-tight">
                  49
                </span>
                <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                  /month
                </span>
              </div>
              <ul role="list" className="my-7 space-y-5">
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    2 team members
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    20GB Cloud storage
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    Integration help
                  </span>
                </li>
                <li className="flex space-x-3 line-through decoration-gray-500">
                  <svg
                    className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500">
                    Sketch Files
                  </span>
                </li>
                <li className="flex space-x-3 line-through decoration-gray-500">
                  <svg
                    className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500">
                    API Access
                  </span>
                </li>
                <li className="flex space-x-3 line-through decoration-gray-500">
                  <svg
                    className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500">
                    Complete documentation
                  </span>
                </li>
                <li className="flex space-x-3 line-through decoration-gray-500">
                  <svg
                    className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500">
                    24×7 phone & email support
                  </span>
                </li>
              </ul>
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
              >
                Choose plan
              </button>
            </Card>
          </div>
          <div className="max-w-sm">
            <Card>
              <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
                Standard plan
              </h5>
              <div className="flex items-baseline text-gray-900 dark:text-white">
                <span className="text-3xl font-semibold">
                  <BiRupee />
                </span>
                <span className="text-5xl font-extrabold tracking-tight">
                  49
                </span>
                <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                  /month
                </span>
              </div>
              <ul role="list" className="my-7 space-y-5">
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    2 team members
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    20GB Cloud storage
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    Integration help
                  </span>
                </li>
                <li className="flex space-x-3 line-through decoration-gray-500">
                  <svg
                    className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500">
                    Sketch Files
                  </span>
                </li>
                <li className="flex space-x-3 line-through decoration-gray-500">
                  <svg
                    className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500">
                    API Access
                  </span>
                </li>
                <li className="flex space-x-3 line-through decoration-gray-500">
                  <svg
                    className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500">
                    Complete documentation
                  </span>
                </li>
                <li className="flex space-x-3 line-through decoration-gray-500">
                  <svg
                    className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500">
                    24×7 phone & email support
                  </span>
                </li>
              </ul>
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
              >
                Choose plan
              </button>
            </Card>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default UserPlan;
