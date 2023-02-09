import React from "react";
import {
    Accordion,
    Label,
    Button,
    Checkbox,
    Radio,
    Textarea,
} from "flowbite-react";
import { FiSave } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const FormType = () => {
    let navigate = useNavigate();

    const formSubmit = () => {
        navigate("/dashboard/patient/");
    };

    return (
        <>
            <Accordion>
                <Accordion.Panel>
                    <Accordion.Title>
                        Form Title Goes Here / 22-01-2023 / Dr. Sashreek
                    </Accordion.Title>
                    <Accordion.Content>
                        <form onSubmit={formSubmit}>
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="mb-6">
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="formFrequency"
                                            value="View Form Freqeuncy"
                                        />
                                    </div>
                                    <p
                                        id="formFrequency"
                                        className="mt-1 text-lg font-semibold text-gray-600 sm:col-span-2 sm:mt-0"
                                    >
                                        Frequency Type:{" "}
                                        <span className="text-gray-800 font-semibold">
                                            Daily
                                        </span>
                                    </p>
                                </div>
                                <div className="mb-6">
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="formTitle"
                                            value="View Form Title"
                                        />
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
                                        <Label
                                            htmlFor="questionTitle"
                                            value="View Question Title"
                                        />
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
                                    <div className="flex items-center gap-2">
                                        <Checkbox id="questionChoice1" />
                                        <Label htmlFor="questionChoice1">
                                            Option 1
                                        </Label>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="questionChoice2"
                                            value="View Question Choice"
                                        />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Checkbox id="questionChoice2" />
                                        <Label htmlFor="questionChoice2">
                                            Option 2
                                        </Label>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="questionChoice3"
                                            value="View Question Choice"
                                        />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Checkbox id="questionChoice3" />
                                        <Label htmlFor="questionChoice3">
                                            Option 3
                                        </Label>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="questionChoice4"
                                            value="View Question Choice"
                                        />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Checkbox id="questionChoice4" />
                                        <Label htmlFor="questionChoice4">
                                            Option 4
                                        </Label>
                                    </div>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="mb-6">
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="questionTitle"
                                            value="View Question Title"
                                        />
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
                                    <div className="flex items-center gap-2">
                                        <Radio id="questionChoice1" />
                                        <Label htmlFor="questionChoice1">
                                            Option 1
                                        </Label>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="questionChoice2"
                                            value="View Question Choice"
                                        />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Radio id="questionChoice2" />
                                        <Label htmlFor="questionChoice2">
                                            Option 2
                                        </Label>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="questionChoice3"
                                            value="View Question Choice"
                                        />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Radio id="questionChoice3" />
                                        <Label htmlFor="questionChoice3">
                                            Option 3
                                        </Label>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="questionChoice4"
                                            value="View Question Choice"
                                        />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Radio id="questionChoice4" />
                                        <Label htmlFor="questionChoice4">
                                            Option 4
                                        </Label>
                                    </div>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="mb-6">
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="questionTitle"
                                            value="View Question Title"
                                        />
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
                                    <div id="textarea">
                                        <div className="mb-2 block">
                                            <Label
                                                htmlFor="medicalInfo"
                                                value="Your message"
                                            />
                                        </div>
                                        <Textarea
                                            id="medicalInfo"
                                            placeholder="Please add your Medical Information..."
                                            rows={4}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="mb-6">
                                    <div className="mb-2 block">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <div>
                                                <Button type="submit">
                                                    <FiSave className="mr-2 h-5 w-5" />
                                                    Submit Form
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </>
    );
};

export default FormType;
