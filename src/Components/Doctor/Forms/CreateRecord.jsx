import React from "react";
import { Label, TextInput, Radio } from "flowbite-react";
import {
  HiMail,
  HiUser,
  HiCalendar,
  HiPhone,
  HiAtSymbol,
  HiHeart,
} from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const CreateRecord = () => {
  const navigate = useNavigate();

  const patientRecord = () => {
    navigate("/view/patients/");
  };

  return (
    <>
      <form className="mt-8 space-y-6" onSubmit={patientRecord} method="POST">
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="mb-6">
            <div className="mb-2 block">
              <Label htmlFor="userName" value="Enter Patient User Name" />
            </div>
            <TextInput
              id="userName"
              type="text"
              icon={HiAtSymbol}
              placeholder="Enter Patient User Name"
              sizing="md"
              //required={true}
            />
          </div>
          <div className="mb-6">
            <div className="mb-2 block">
              <Label htmlFor="name" value="Enter Patient Full Name" />
            </div>
            <TextInput
              id="name"
              type="text"
              icon={HiUser}
              placeholder="Enter Patient Full Name"
              sizing="md"
            />
          </div>
          <div className="mb-6">
            <div className="mb-2 block">
              <Label htmlFor="radio" value="Select Patient Gender" />
            </div>
            <div className="flex items-center gap-2">
              <Radio id="male" name="gender" value="gender" />
              <Label htmlFor="male">Male</Label>
              <Radio id="female" name="gender" value="gender" />
              <Label htmlFor="female">Female</Label>
            </div>
          </div>
          <div className="mb-6">
            <div className="mb-2 block">
              <Label htmlFor="email4" value="Enter Patient Valid Email" />
            </div>
            <TextInput
              id="email4"
              type="email"
              icon={HiMail}
              placeholder="Enter Patient Valid Email"
              sizing="md"
            />
          </div>
          <div className="mb-6">
            <div className="mb-2 block">
              <Label htmlFor="dob" value="Enter Patient Date of Birth" />
            </div>
            <TextInput
              id="dob"
              type="date"
              icon={HiCalendar}
              placeholder="Enter Patient Date of Birth"
              sizing="md"
            />
          </div>
          <div className="mb-6">
            <div className="mb-2 block">
              <Label htmlFor="phone" value="Enter Patient Phone Number" />
            </div>
            <TextInput
              id="phone"
              type="tel"
              icon={HiPhone}
              placeholder="Enter Patient Phone Number"
              sizing="md"
            />
          </div>
          <div className="mb-6">
            <div className="mb-2 block">
              <Label htmlFor="height" value="Enter Patient Height" />
            </div>
            <TextInput
              id="height"
              type="number"
              icon={HiHeart}
              placeholder="Enter Patient Height"
              sizing="md"
            />
          </div>
          <div className="mb-6">
            <div className="mb-2 block">
              <Label htmlFor="height" value="Enter Patient Weight" />
            </div>
            <TextInput
              id="height"
              type="number"
              icon={HiHeart}
              placeholder="Enter Patient Weight"
              sizing="md"
            />
          </div>
          <div className="mb-6">
            <div className="mb-2 block">
              <Label
                htmlFor="careName"
                value="Enter Patient Caretaker Full Name"
              />
            </div>
            <TextInput
              id="careName"
              type="text"
              icon={HiUser}
              placeholder="Enter Patient Caretaker Full Name"
              sizing="md"
            />
          </div>
          <div className="mb-6">
            <div className="mb-2 block">
              <Label
                htmlFor="careEmail"
                value="Enter Patient Caretaker Valid Email"
              />
            </div>
            <TextInput
              id="careEmail"
              type="email"
              icon={HiMail}
              placeholder="Enter Patient Caretaker Valid Email"
              sizing="md"
            />
          </div>
          <div className="mb-6">
            <div className="mb-2 block">
              <Label
                htmlFor="carePhone"
                value="Enter Patient Caretaker Phone Number"
              />
            </div>
            <TextInput
              id="carePhone"
              type="tel"
              icon={HiPhone}
              placeholder="Enter Patient Caretaker Phone Number"
              sizing="md"
            />
          </div>
          <div className="mb-6">
            <div className="mb-2 block">
              <Label
                htmlFor="careRelation"
                value="Select Patient Caretaker Relation"
              />
            </div>
            <select
              id="careRelation"
              name="relation"
              autoComplete="country-name"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              <option>Father</option>
              <option>Mother</option>
              <option>Brother</option>
              <option>Sister</option>
              <option>Brother In Law</option>
              <option>Sister In Law</option>
              <option>Son </option>
              <option>Daughter</option>
              <option>Father In Law</option>
              <option>Mother In Law</option>
              <option>Grand Father</option>
              <option>Grand Mother</option>
              <option>Uncle</option>
              <option>Aunt</option>
              <option>Other</option>
            </select>
          </div>
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

export default CreateRecord;
