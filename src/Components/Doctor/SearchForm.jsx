import React from "react";
import { Label, TextInput } from "flowbite-react";
import { HiAtSymbol } from "react-icons/hi";

const SearchForm = () => {
  return (
    <>
      <form className="mt-8 space-y-6" method="POST">
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="mb-6">
            <div className="mb-2 block">
              <Label htmlFor="patientID" value="Enter Patient ID" />
            </div>
            <TextInput
              id="patientID"
              type="text"
              icon={HiAtSymbol}
              placeholder="Enter Patient ID"
              sizing="md"
              //required={true}
            />
          </div>
          <div className="py-8 mb-6">
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Search Patient
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchForm;
