import React from "react";
import { DocNav, DocFooter } from "../../Dashboard/index";
import { FormStates } from "../index";

const FormActivations = () => {
  return (
    <>
      <DocNav />
      <main>
        <div className="dashboard__Container">
          <FormStates />
        </div>
      </main>
      <DocFooter />
    </>
  );
};

export default FormActivations;
