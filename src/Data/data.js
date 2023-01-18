import { FiHome } from "react-icons/fi";

export const links = [
  {
    name: "Dashboard",
    icons: <FiHome />,
  },
  {
    name: "Patients",
    icons: <FiHome />,
  },
  {
    name: "Settings",
    icons: <FiHome />,
  },
  {
    name: "Forms",
    icons: <FiHome />,
  },
  {
    name: "Payments",
    icons: <FiHome />,
  },
  {
    name: "Logout",
    icons: <FiHome />,
  },
];

export const userPlans = [
  {
    id: 1,
    plantype: "Regular Plan",
    price: 500,
    activeFeatures: [
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
      </li>,
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
      </li>,
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
      </li>,
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
          {/* {plans.feature_1} */}
        </span>
      </li>,
    ],
    feature_1: "For Clinics",
    feature_2: "100 Patients",
    feature_3: "20+ users",
    feature_4: "1 ~ 50 Forms Overall",
    feature_5: "1 ~ 28 Diet Charts Overall",
    feature_6: "Email Support",
    feature_7: "Complete documentation",
    feature_8: "24×7 phone",
  },
  {
    id: 2,
    plantype: "Standard Plan",
    price: 950,
    feature_1: "For Clinics",
    feature_2: "100 Patients",
    feature_3: "20+ users",
    feature_4: "1 ~ 50 Forms Overall",
    feature_5: "1 ~ 28 Diet Charts Overall",
    feature_6: "Email Support",
    feature_7: "Complete documentation",
    feature_8: "24×7 phone",
  },
  {
    id: 3,
    plantype: "Professional Plan",
    price: 1200,
    feature_1: "For Clinics",
    feature_2: "100 Patients",
    feature_3: "20+ users",
    feature_4: "1 ~ 50 Forms Overall",
    feature_5: "1 ~ 28 Diet Charts Overall",
    feature_6: "Email Support",
    feature_7: "Complete documentation",
    feature_8: "24×7 phone",
  },
  {
    id: 4,
    plantype: "Enterprise Plan",
    price: 3000,
    feature_1: "For Clinics",
    feature_2: "100 Patients",
    feature_3: "20+ users",
    feature_4: "1 ~ 50 Forms Overall",
    feature_5: "1 ~ 28 Diet Charts Overall",
    feature_6: "Email Support",
    feature_7: "Complete documentation",
    feature_8: "24×7 phone",
  },
];
