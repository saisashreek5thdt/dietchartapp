import React from "react";
import { Label } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const FormStates = () => {

    let navigate = useNavigate();

    const formActiveState = () => {
        navigate('/view/forms/');
    };

  return (
    <>
      <form className="mt-8 space-y-6" onSubmit={formActiveState} method="POST">
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="mb-6">
            <div className="mb-2 block">
              <Label htmlFor="formName" value="Select Form Name" />
            </div>
            <select
              id="formName"
              name="relation"
              autoComplete="country-name"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
            >
              <option>Select Form Name</option>
              <option>Form Name 1</option>
              <option>Form Name 2</option>
              <option>Form Name 3</option>
              <option>Form Name 4</option>
            </select>
          </div>
          <div className="mb-6">
            <div className="mb-2 block">
              <Label htmlFor="activeState" value="Select Active State" />
            </div>
            <select
              id="activeState"
              name="relation"
              autoComplete="country-name"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
            >
              <option>Select Active State</option>
              <option>Activate</option>
              <option>De-Activate</option>
            </select>
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-teal-600 py-2 px-4 text-sm font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormStates;
