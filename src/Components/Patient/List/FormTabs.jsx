/* eslint-disable react/style-prop-object */
import React from "react";
import { Tabs } from "flowbite-react";
import { FormType } from "../index";

const FormTabs = () => {
    return (
        <>
            <Tabs.Group aria-label="Default tabs" style="default">
                <Tabs.Item title="Daily">
                    <FormType />
                </Tabs.Item>
                <Tabs.Item title="Weekly">
                    <FormType />
                </Tabs.Item>
                <Tabs.Item title="Bi-Weekly">
                    <FormType />
                </Tabs.Item>
                <Tabs.Item title="Monthly">
                    <FormType />
                </Tabs.Item>
                <Tabs.Item title="Onetime">
                    <FormType />
                </Tabs.Item>
            </Tabs.Group>
        </>
    );
};

export default FormTabs;
