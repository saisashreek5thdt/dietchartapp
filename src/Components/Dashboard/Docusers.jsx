import React from "react";
import { Link } from "react-router-dom";
import { Card, Table, Checkbox } from "flowbite-react";

const Docusers = () => {
  return (
    <>
      <div className="dashboard__Container">
        <div className="dashboard__Grids">
          <div className="cards__Container">
            <Link to="/view/patients/">
              <Card
                className="cards__Img"
                imgSrc="https://img.freepik.com/free-vector/employer-meeting-job-applicant-pre-employment-assessment-employee-evaluation-assessment-form-report-performance-review-concept-illustration_335657-2058.jpg?w=1380&t=st=1674024557~exp=1674025157~hmac=6157e45478de47ce7f17fb936c38e53d4ff0840477a5ca64f6adf62ac32f2bff"
              >
                <h5 className="cards__Title">Patients</h5>
              </Card>
            </Link>
          </div>
          <div className="cards__Container">
            <Link to="/view/forms/">
              <Card
                className="cards__Img"
                imgSrc="https://img.freepik.com/free-vector/memory-storage-concept-illustration_114360-3888.jpg?w=826&t=st=1674024872~exp=1674025472~hmac=c08220a20f979c09172919e2597b439662d1c9da2db554cdbcb5c3bf875f5b0e"
              >
                <h5 className="cards__Title">Forms</h5>
              </Card>
            </Link>
          </div>
          <div className="cards__Container">
            <Card
              className="cards__Img"
              imgSrc="https://img.freepik.com/free-vector/nutritionist-concept-nutrition-therapy-with-healthy-food-physical-activity-weight-loss-program-diet-concept-vector-illustration-cartoon-style_613284-1316.jpg?w=1380&t=st=1674024968~exp=1674025568~hmac=7bc86e59ffcfee04a1cf91e1b1ec5bb6e1087c0054c0aa8f949798ae1c89cadf"
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
        {/* 
        <Table hoverable={true}>
          <Table.Head>
            <Table.HeadCell className="!p-4">
              <Checkbox />
            </Table.HeadCell>
            <Table.HeadCell>Product name</Table.HeadCell>
            <Table.HeadCell>Color</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="!p-4">
                <Checkbox />
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Apple MacBook Pro 17"
              </Table.Cell>
              <Table.Cell>Sliver</Table.Cell>
              <Table.Cell>Laptop</Table.Cell>
              <Table.Cell>$2999</Table.Cell>
              <Table.Cell>
                <a
                  href="/tables"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Edit
                </a>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="!p-4">
                <Checkbox />
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Microsoft Surface Pro
              </Table.Cell>
              <Table.Cell>White</Table.Cell>
              <Table.Cell>Laptop PC</Table.Cell>
              <Table.Cell>$1999</Table.Cell>
              <Table.Cell>
                <a
                  href="/tables"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Edit
                </a>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="!p-4">
                <Checkbox />
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Magic Mouse 2
              </Table.Cell>
              <Table.Cell>Black</Table.Cell>
              <Table.Cell>Accessories</Table.Cell>
              <Table.Cell>$99</Table.Cell>
              <Table.Cell>
                <a
                  href="/tables"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Edit
                </a>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
         */}
      </div>
    </>
  );
};

export default Docusers;
