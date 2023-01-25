import React from "react";
import { Accordion, Label } from "flowbite-react";
import { HiPencil } from "react-icons/hi";

const FormFormat = () => {
  return (
    <>
      <Accordion>
        <Accordion.Panel>
          <Accordion.Title>
            Form Title Goes Here / 22-01-2023 / Dr. Sashreek
          </Accordion.Title>
          <Accordion.Content>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="mb-6">
                <div className="mb-2 block">
                  <Label htmlFor="formEdit" value="Edit Form" />
                </div>
                <a
                  href="/view/forms/"
                  id="formEdit"
                  className="mt-1 text-lg font-semibold text-gray-600 sm:col-span-2 sm:mt-0"
                >
                  <HiPencil />
                </a>
              </div>
              <div className="mb-6">
                <div className="mb-2 block">
                  <Label htmlFor="formFrequency" value="View Form Freqeuncy" />
                </div>
                <p
                  id="formFrequency"
                  className="mt-1 text-lg font-semibold text-gray-600 sm:col-span-2 sm:mt-0"
                >
                  Frequency Type:{" "}
                  <span className="text-gray-800 font-semibold">Daily</span>
                </p>
              </div>
              <div className="mb-6">
                <div className="mb-2 block">
                  <Label htmlFor="formTitle" value="View Form Title" />
                </div>
                <p
                  id="formTitle"
                  className="mt-1 text-lg font-semibold text-gray-600 sm:col-span-2 sm:mt-0"
                >
                  Form Title Name Goes Here
                </p>
              </div>
              <div className="mb-6">
                <div className="mb-2 block">
                  <Label htmlFor="questionType" value="View Question Type" />
                </div>
                <p
                  id="questionType"
                  className="mt-1 text-lg font-semibold text-gray-600 sm:col-span-2 sm:mt-0"
                >
                  Question Type:{" "}
                  <span className="text-gray-800 font-semibold">Checkbox</span>
                </p>
              </div>
              <div className="mb-6">
                <div className="mb-2 block">
                  <Label htmlFor="questionTitle" value="View Question Title" />
                </div>
                <p
                  id="questionTitle"
                  className="mt-1 text-lg font-semibold text-gray-600 sm:col-span-2 sm:mt-0"
                >
                  Question Title Goes Here
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="mb-6">
                <div className="mb-2 block">
                  <Label
                    htmlFor="questionChoice1"
                    value="View Question Choice"
                  />
                </div>
                <p
                  id="questionChoice1"
                  className="mt-1 text-lg font-semibold text-gray-600 sm:col-span-2 sm:mt-0"
                >
                  Question Choice1:{" "}
                  <span className="text-gray-800 font-semibold">Option 1</span>
                </p>
              </div>
              <div className="mb-6">
                <div className="mb-2 block">
                  <Label
                    htmlFor="questionChoice2"
                    value="View Question Choice"
                  />
                </div>
                <p
                  id="questionChoice2"
                  className="mt-1 text-lg font-semibold text-gray-600 sm:col-span-2 sm:mt-0"
                >
                  Question Choice2:{" "}
                  <span className="text-gray-800 font-semibold">Option 2</span>
                </p>
              </div>
              <div className="mb-6">
                <div className="mb-2 block">
                  <Label
                    htmlFor="questionChoice3"
                    value="View Question Choice"
                  />
                </div>
                <p
                  id="questionChoice3"
                  className="mt-1 text-lg font-semibold text-gray-600 sm:col-span-2 sm:mt-0"
                >
                  Question Choice1:{" "}
                  <span className="text-gray-800 font-semibold">Option 3</span>
                </p>
              </div>
              <div className="mb-6">
                <div className="mb-2 block">
                  <Label
                    htmlFor="questionChoice4"
                    value="View Question Choice"
                  />
                </div>
                <p
                  id="questionChoice4"
                  className="mt-1 text-lg font-semibold text-gray-600 sm:col-span-2 sm:mt-0"
                >
                  Question Choice2:{" "}
                  <span className="text-gray-800 font-semibold">Option 4</span>
                </p>
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            Form Title Goes Here / 22-01-2023 / Dr. Sashreek
          </Accordion.Title>
          <Accordion.Content>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="mb-6">
                <div className="mb-2 block">
                  <Label htmlFor="formEdit" value="Edit Form" />
                </div>
                <a
                  href="/view/forms/"
                  id="formEdit"
                  className="mt-1 text-lg font-semibold text-gray-600 sm:col-span-2 sm:mt-0"
                >
                  <HiPencil />
                </a>
              </div>
              <div className="mb-6">
                <div className="mb-2 block">
                  <Label htmlFor="formFrequency" value="View Form Freqeuncy" />
                </div>
                <p
                  id="formFrequency"
                  className="mt-1 text-lg font-semibold text-gray-600 sm:col-span-2 sm:mt-0"
                >
                  Frequency Type:{" "}
                  <span className="text-gray-800 font-semibold">Daily</span>
                </p>
              </div>
              <div className="mb-6">
                <div className="mb-2 block">
                  <Label htmlFor="formTitle" value="View Form Title" />
                </div>
                <p
                  id="formTitle"
                  className="mt-1 text-lg font-semibold text-gray-600 sm:col-span-2 sm:mt-0"
                >
                  Form Title Name Goes Here
                </p>
              </div>
              <div className="mb-6">
                <div className="mb-2 block">
                  <Label htmlFor="questionType" value="View Question Type" />
                </div>
                <p
                  id="questionType"
                  className="mt-1 text-lg font-semibold text-gray-600 sm:col-span-2 sm:mt-0"
                >
                  Question Type:{" "}
                  <span className="text-gray-800 font-semibold">Radio</span>
                </p>
              </div>
              <div className="mb-6">
                <div className="mb-2 block">
                  <Label htmlFor="questionTitle" value="View Question Title" />
                </div>
                <p
                  id="questionTitle"
                  className="mt-1 text-lg font-semibold text-gray-600 sm:col-span-2 sm:mt-0"
                >
                  Question Title Goes Here
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="mb-6">
                <div className="mb-2 block">
                  <Label
                    htmlFor="questionChoice1"
                    value="View Question Choice"
                  />
                </div>
                <p
                  id="questionChoice1"
                  className="mt-1 text-lg font-semibold text-gray-600 sm:col-span-2 sm:mt-0"
                >
                  Question Choice1:{" "}
                  <span className="text-gray-800 font-semibold">Option 1</span>
                </p>
              </div>
              <div className="mb-6">
                <div className="mb-2 block">
                  <Label
                    htmlFor="questionChoice2"
                    value="View Question Choice"
                  />
                </div>
                <p
                  id="questionChoice2"
                  className="mt-1 text-lg font-semibold text-gray-600 sm:col-span-2 sm:mt-0"
                >
                  Question Choice2:{" "}
                  <span className="text-gray-800 font-semibold">Option 2</span>
                </p>
              </div>
              <div className="mb-6">
                <div className="mb-2 block">
                  <Label
                    htmlFor="questionChoice3"
                    value="View Question Choice"
                  />
                </div>
                <p
                  id="questionChoice3"
                  className="mt-1 text-lg font-semibold text-gray-600 sm:col-span-2 sm:mt-0"
                >
                  Question Choice1:{" "}
                  <span className="text-gray-800 font-semibold">Option 3</span>
                </p>
              </div>
              <div className="mb-6">
                <div className="mb-2 block">
                  <Label
                    htmlFor="questionChoice4"
                    value="View Question Choice"
                  />
                </div>
                <p
                  id="questionChoice4"
                  className="mt-1 text-lg font-semibold text-gray-600 sm:col-span-2 sm:mt-0"
                >
                  Question Choice2:{" "}
                  <span className="text-gray-800 font-semibold">Option 4</span>
                </p>
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            Form Title Goes Here / 22-01-2023 / Dr. Sashreek
          </Accordion.Title>
          <Accordion.Content>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="mb-6">
                <div className="mb-2 block">
                  <Label htmlFor="formEdit" value="Edit Form" />
                </div>
                <a
                  href="/view/forms/"
                  id="formEdit"
                  className="mt-1 text-lg font-semibold text-gray-600 sm:col-span-2 sm:mt-0"
                >
                  <HiPencil />
                </a>
              </div>
              <div className="mb-6">
                <div className="mb-2 block">
                  <Label htmlFor="formFrequency" value="View Form Freqeuncy" />
                </div>
                <p
                  id="formFrequency"
                  className="mt-1 text-lg font-semibold text-gray-600 sm:col-span-2 sm:mt-0"
                >
                  Frequency Type:{" "}
                  <span className="text-gray-800 font-semibold">Daily</span>
                </p>
              </div>
              <div className="mb-6">
                <div className="mb-2 block">
                  <Label htmlFor="formTitle" value="View Form Title" />
                </div>
                <p
                  id="formTitle"
                  className="mt-1 text-lg font-semibold text-gray-600 sm:col-span-2 sm:mt-0"
                >
                  Form Title Name Goes Here
                </p>
              </div>
              <div className="mb-6">
                <div className="mb-2 block">
                  <Label htmlFor="questionType" value="View Question Type" />
                </div>
                <p
                  id="questionType"
                  className="mt-1 text-lg font-semibold text-gray-600 sm:col-span-2 sm:mt-0"
                >
                  Question Type:{" "}
                  <span className="text-gray-800 font-semibold">Textarea</span>
                </p>
              </div>
              <div className="mb-6">
                <div className="mb-2 block">
                  <Label htmlFor="questionTitle" value="View Question Title" />
                </div>
                <p
                  id="questionTitle"
                  className="mt-1 text-lg font-semibold text-gray-600 sm:col-span-2 sm:mt-0"
                >
                  Question Title Goes Here
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="mb-6">
                <div className="mb-2 block">
                  <Label
                    htmlFor="questionChoice1"
                    value="View Question Choice"
                  />
                </div>
                <p
                  id="questionChoice1"
                  className="mt-1 text-lg font-semibold text-gray-600 sm:col-span-2 sm:mt-0"
                >
                  This Option is paragraph based
                </p>
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </>
  );
};

export default FormFormat;
