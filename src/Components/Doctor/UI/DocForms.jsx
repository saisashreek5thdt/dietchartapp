import React from "react";
import { DocNav, DocFooter } from "../../Dashboard/index";
import { CreateForms, ViewForms, FormResponse, Activation } from "../index";

const DocForms = () => {
  return (
    <>
      <DocNav />
      <main>
        <div className="dashboard__Container">
          <div className="dashboard__Grids">
            <CreateForms />
            <ViewForms />
            <FormResponse />
            <Activation />
          </div>
        </div>
      </main>
      <DocFooter />
    </>
  );
};

export default DocForms;
