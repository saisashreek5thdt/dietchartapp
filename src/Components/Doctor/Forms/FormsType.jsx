import React from "react";
import { Label, TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const FormsType = () => {
  let navigate = useNavigate();

  const formCreation = () => {
    navigate("/view/forms/");
  };

  return (
    <>
      <form className="mt-8 space-y-6" onSubmit={formCreation} method="POST">
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="mb-6">
            <div className="mb-2 block">
              <Label htmlFor="formFrequency" value="Select Form Freqeuncy" />
            </div>
            <select
              id="formFrequency"
              name="relation"
              autoComplete="country-name"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              <option>Select Form Freqeuncy</option>
              <option>Daily</option>
              <option>Weekly</option>
              <option>Bi-Weekly</option>
              <option>Monthly</option>
            </select>
          </div>
          <div className="mb-6">
            <div className="mb-2 block">
              <Label htmlFor="formTitle" value="Enter Form Title" />
            </div>
            <TextInput
              id="formTitle"
              type="text"
              placeholder="Enter Form Title"
              sizing="md"
              //required={true}
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="mb-6">
            <div className="mb-2 block">
              <Label htmlFor="questionType" value="Select Question Type" />
            </div>
            <select
              id="questionType"
              name="relation"
              autoComplete="country-name"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              <option>Select Question Type</option>
              <option>Checkbox</option>
              <option>Radio</option>
              <option>Textarea</option>
            </select>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="mb-6">
            <div className="mb-2 block">
              <Label htmlFor="questionTitle" value="Enter Question Title" />
            </div>
            <TextInput
              id="questionTitle"
              type="text"
              placeholder="Enter Question Title"
              sizing="md"
              //required={true}
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="mb-6">
            <div className="mb-2 block">
              <Label htmlFor="questionChoice" value="Enter Question Choice" />
            </div>
            <TextInput
              id="questionChoice"
              type="text"
              placeholder="Enter Question Choice"
              sizing="md"
              //required={true}
            />
          </div>
          <div className="mb-6">
            <div className="mb-2 block">
              <Label htmlFor="questionChoice" value="Enter Question Choice" />
            </div>
            <TextInput
              id="questionChoice"
              type="text"
              placeholder="Enter Question Choice"
              sizing="md"
              //required={true}
            />
          </div>
          <div className="mb-6">
            <div className="mb-2 block">
              <Label htmlFor="questionChoice" value="Enter Question Choice" />
            </div>
            <TextInput
              id="questionChoice"
              type="text"
              placeholder="Enter Question Choice"
              sizing="md"
              //required={true}
            />
          </div>
          <div className="mb-6">
            <div className="mb-2 block">
              <Label htmlFor="questionChoice" value="Enter Question Choice" />
            </div>
            <TextInput
              id="questionChoice"
              type="text"
              placeholder="Enter Question Choice"
              sizing="md"
              //required={true}
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="mb-6">
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Create
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormsType;
