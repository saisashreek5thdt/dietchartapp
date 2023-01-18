import React from "react";
import { DocNav, DocFooter } from "../../Components/Dashboard/index";
import {CreatePatients, ViewPatients, SearchPatients} from "./index"

const Patients = () => {
  return (
    <>
      <DocNav />
      <main>
        <div className="dashboard__Container">
          <div className="dashboard__Grids">
            <CreatePatients />
            <ViewPatients />
            <SearchPatients />
          </div>
        </div>
      </main>
      <DocFooter />
    </>
  );
};

export default Patients;
