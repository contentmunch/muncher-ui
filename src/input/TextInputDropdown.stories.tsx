import React, {useState} from 'react';
import {TextInputDropdown, TextInputDropdownProps} from "./TextInputDropdown";
import {Meta, Story} from "@storybook/react";
import "./assets/TextInputDropdownStory.scss";

export default {
    title: 'Input/Text Input Dropdown',
    component: TextInputDropdown,
} as Meta;

const Template: Story<TextInputDropdownProps> = (args) => {
    const [showContent, setShowContent] = useState(false);
    const [value, setValue] = useState("");
    return (
        <div className="muncher-input-drop-down-story">
            <TextInputDropdown {...args}
                               showContent={showContent}
                               setShowContent={setShowContent}
                               handleInputChange={(value) => {
                                   setValue(value);

                               }}
                               value={value}
                               label="country"
                               required={true}
                               error={"This is an error"}
            >
                <p>Drop down content</p>
                <p>Drop down content</p>
                <p>Drop down content</p>
                <p>Drop down content</p>
                <p onClick={() => {
                    setValue("Tese");
                    setShowContent(false);
                }}>Drop down content</p>

            </TextInputDropdown>
        </div>
    );

}

export const Default = Template.bind({});
Default.args = {
    focus: true,
    inputPlaceHolder: "Start typing.."
};
