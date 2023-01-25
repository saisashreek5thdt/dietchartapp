import React from "react";
import { DocNav, DocFooter } from "../../Dashboard/index";
import { SearchRecord, SearchForm } from "../index";

const SearchPatientRecord = () => {
  return (
    <>
      <DocNav />
      <main>
        <div className="dashboard__Container">
          <SearchForm />
          <SearchRecord />
        </div>
      </main>
      <DocFooter />
    </>
  );
};

export default SearchPatientRecord;
