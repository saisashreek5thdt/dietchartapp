import React from "react";
import { Card } from "flowbite-react";

const ListForms = () => {
  return (
    <>
      <div className="max-w-sm">
        <Card>
          <div className="mb-4 flex items-center justify-between">
            <h5 className="text-lg font-bold leading-none text-gray-900 dark:text-white">
              Latest Forms
            </h5>
            <a
              href="/"
              className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              View forms
            </a>
          </div>
          <div className="flow-root">
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                      Form Name
                    </p>
                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                      Form Type
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    View 
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                      Form Name
                    </p>
                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                      Form Type
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    View
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                      Form Name
                    </p>
                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                      Form Type
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    View
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                      Form Name
                    </p>
                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                      Form Type
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    View
                  </div>
                </div>
              </li>
              <li className="pt-3 pb-0 sm:pt-4">
                <div className="flex items-center space-x-4">
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                      Form Name
                    </p>
                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                      Form Type
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    View
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </Card>
      </div>
    </>
  );
};

export default ListForms;
