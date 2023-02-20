import React from 'react';
import { Accordion } from "flowbite-react";
import { ViewLatestPrescription } from "../index"

const ViewOldPrescriptions = () => {
  return (
    <>
        <Accordion alwaysOpen={false}>
            <Accordion.Panel>
                <Accordion.Title>Dr. Suha Chandramouli - 20/02/2023</Accordion.Title>
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
    </>
  )
}

export default ViewOldPrescriptions