import React from "react";
import { DocNav, DocFooter } from "../../Dashboard/index";
import { FormsType } from "../index";

const CreateForm = () => {
  return (
    <>
      <DocNav />
      <main>
        <div className="dashboard__Container">
          <FormsType />
        </div>
      </main>
      <DocFooter />
    </>
  );
};

export default CreateForm;
