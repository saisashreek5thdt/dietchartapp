import React from "react";
import { DocNav, DocFooter } from "../../Components/Dashboard/index";
import { CreateForms, ViewForms, FormResponse } from "./index";

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
          </div>
        </div>
      </main>
      <DocFooter />
    </>
  );
};

export default DocForms;
