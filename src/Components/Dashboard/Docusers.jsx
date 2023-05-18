import React from "react";
import { Link } from "react-router-dom";
import { Card } from "flowbite-react";
import patients from "../../Assets/images/Services/patients.png";
import forms from "../../Assets/images/Services/forms.jpg";
import nutrition from "../../Assets/images/Services/nutritionist.png"

const Docusers = () => {
  return (
    <>
      <div className="dashboard__Container">
        <div className="dashboard__Grids">
          <div className="cards__Container">
            <Link to="/view/patients/">
              <Card
                className="cards__Img"
                imgSrc={patients}
              >
                <h5 className="cards__Title">Patients</h5>
              </Card>
            </Link>
          </div>
          <div className="cards__Container">
            <Link to="/view/forms/">
              <Card
                className="cards__Img"
                imgSrc={forms}
              >
                <h5 className="cards__Title">Forms</h5>
              </Card>
            </Link>
          </div>
          <div className="cards__Container">
            <Card
              className="cards__Img"
              imgSrc={nutrition}
            >
              <h5 className="cards__Title">Diet Chart</h5>
            </Card>
          </div>
          <div className="cards__Container">
            <Card className="cards__Img">
              <div className="cards__Flex--Col">
                <h5 className="cards__Title">Patient Count</h5>
                <div className="cards__Flex--Box">
                  <a href="/" className="cards__Flex--Paid">
                    Paid: 18
                  </a>
                  <a href="/" className="cards__Flex--Unpaid">
                    UnPaid: 20
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
        <div className="dashboard__Grids">
          <div className="cards__Container">
            <Card className="cards__Block">
              <div className="mb-4 flex items-center justify-between">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                  Latest Payments
                </h5>
                <a
                  href="/"
                  className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  View all
                </a>
              </div>
              <div className="flow-root">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="shrink-0">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                          alt="Neil"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                          Neil Sims
                        </p>
                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                          email@windster.com
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $320
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="shrink-0">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                          alt="Bonnie"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                          Bonnie Green
                        </p>
                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                          email@windster.com
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $3467
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="shrink-0">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                          alt="Michael"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                          Michael Gough
                        </p>
                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                          email@windster.com
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $67
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="shrink-0">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                          alt="Lana"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                          Lana Byrd
                        </p>
                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                          email@windster.com
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $367
                      </div>
                    </div>
                  </li>
                  <li className="pt-3 pb-0 sm:pt-4">
                    <div className="flex items-center space-x-4">
                      <div className="shrink-0">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                          alt="Thomas"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                          Thomes Lean
                        </p>
                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                          email@windster.com
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $2367
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
          <div className="cards__Container">
            <Card className="my-5">
              <div className="mb-4 flex items-center justify-between">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                  Form Responses
                </h5>
                <a
                  href="/"
                  className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  View all
                </a>
              </div>
              <div className="flow-root">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="shrink-0">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                          alt="Neil"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                          Neil Sims
                        </p>
                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                          email@windster.com
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="shrink-0">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                          alt="Bonnie"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                          Bonnie Green
                        </p>
                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                          email@windster.com
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="shrink-0">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                          alt="Michael"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                          Michael Gough
                        </p>
                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                          email@windster.com
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="shrink-0">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                          alt="Lana"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                          Lana Byrd
                        </p>
                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                          email@windster.com
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="pt-3 pb-0 sm:pt-4">
                    <div className="flex items-center space-x-4">
                      <div className="shrink-0">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                          alt="Thomas"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                          Thomes Lean
                        </p>
                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                          email@windster.com
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
          <div className="cards__Container">
            <Card className="my-5">
              <div className="mb-4 flex items-center justify-between">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                  Latest Patients
                </h5>
                <a
                  href="/"
                  className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  View all
                </a>
              </div>
              <div className="flow-root">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="shrink-0">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                          alt="Neil"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                          Neil Sims
                        </p>
                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                          email@windster.com
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="shrink-0">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                          alt="Bonnie"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                          Bonnie Green
                        </p>
                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                          email@windster.com
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="shrink-0">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                          alt="Michael"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                          Michael Gough
                        </p>
                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                          email@windster.com
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="shrink-0">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                          alt="Lana"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                          Lana Byrd
                        </p>
                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                          email@windster.com
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="pt-3 pb-0 sm:pt-4">
                    <div className="flex items-center space-x-4">
                      <div className="shrink-0">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                          alt="Thomas"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                          Thomes Lean
                        </p>
                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                          email@windster.com
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
          <div className="cards__Container">
            <Card className="my-5">
              <div className="mb-4 flex items-center justify-between">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                  Latest Diets
                </h5>
                <a
                  href="/"
                  className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  View all
                </a>
              </div>
              <div className="flow-root">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="shrink-0">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                          alt="Neil"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                          Neil Sims
                        </p>
                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                          email@windster.com
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="shrink-0">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                          alt="Bonnie"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                          Bonnie Green
                        </p>
                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                          email@windster.com
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="shrink-0">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                          alt="Michael"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                          Michael Gough
                        </p>
                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                          email@windster.com
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="shrink-0">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                          alt="Lana"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                          Lana Byrd
                        </p>
                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                          email@windster.com
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="pt-3 pb-0 sm:pt-4">
                    <div className="flex items-center space-x-4">
                      <div className="shrink-0">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                          alt="Thomas"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                          Thomes Lean
                        </p>
                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                          email@windster.com
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Docusers;
