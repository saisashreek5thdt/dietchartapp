import React from "react";
import { DocNav, DocFooter } from "../../Dashboard/index";
import { FormFormat } from "../index";

const ShowForm = () => {
  return (
    <>
      <DocNav />
      <main>
        <div className="dashboard__Container">
          <FormFormat />
        </div>
      </main>
      <DocFooter />
    </>
  );
};

export default ShowForm;
