import React from "react";
import { DocNav, DocFooter } from "../../Dashboard/index";
import { Card, Table, Checkbox } from "flowbite-react";

const PatientRecords = () => {
  return (
    <>
      <DocNav />
      <main>
        <div className="dashboard__Container">
          <div className="dashboard__Grids">
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
          <Table hoverable={true}>
            <Table.Head>
              <Table.HeadCell className="!p-4">
                <Checkbox />
              </Table.HeadCell>
              <Table.HeadCell>Patient ID</Table.HeadCell>
              <Table.HeadCell>Patient Name</Table.HeadCell>
              <Table.HeadCell>Health Cause</Table.HeadCell>
              <Table.HeadCell>Created Date</Table.HeadCell>
              <Table.HeadCell>Amount</Table.HeadCell>
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
                  DCAPID/20230119/0001
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Aneesh Kapoor
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Fever
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  19-01-2023
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  &#x20B9; 2489
                </Table.Cell>
                <Table.Cell>
                  <a
                    href="/view/patients/all/records/"
                    className="font-medium text-blue-600 hover:underline hover:font-semibold hover:text-blue-500 dark:text-blue-500"
                  >
                    Edit
                  </a>
                  <a
                    href="/view/patients/record/:pid/"
                    className="px-3 font-medium text-emerald-600 hover:underline hover:font-semibold hover:text-emerald-500 dark:text-emerald-500"
                  >
                    View
                  </a>
                  <a
                    href="/view/patients/all/records/"
                    className="px-1 font-medium text-red-600 hover:underline hover:font-semibold hover:text-red-500 dark:text-red-500"
                  >
                    Delete
                  </a>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </main>
      <DocFooter />
    </>
  );
};

export default PatientRecords;
