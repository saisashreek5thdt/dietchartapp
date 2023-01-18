import React from "react";
import { DocNav, DocFooter } from "../../Components/Dashboard/index";
import { CreateRecord } from "./index";

const CreatePatientRecord = () => {
  return (
    <>
      <DocNav />
      <main>
        <div className="dashboard__Container">
            <CreateRecord />
        </div>
      </main>
      <DocFooter />
    </>
  );
};

export default CreatePatientRecord;
