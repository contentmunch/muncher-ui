import React, {useState} from 'react';
import {TextInputDropdown, TextInputDropdownProps} from "./TextInputDropdown";
import {Meta, Story} from "@storybook/react/types-6-0";
import "./assets/TextInputDropdownStory.scss";

export default {
    title: 'Input/Text Input Dropdown',
    component: TextInputDropdown,
} as Meta;

const Template: Story<TextInputDropdownProps> = (args) => {
    const [showContent, setShowContent] = useState(false);
    return (
        <div className="muncher-input-drop-down-story">
            <TextInputDropdown {...args}
                               showContent={showContent}
                               setShowContent={setShowContent}
                               handleInputChange={() => {
                                   setShowContent(true);
                               }}>
                <p>Drop down content</p>
                <p>Drop down content</p>
                <p>Drop down content</p>
                <p>Drop down content</p>
                <p>Drop down content</p>
                <p>Drop down content</p>
                <p>Drop down content</p>
                <p>Drop down content</p>
                <p>Drop down content</p>
                <p>Drop down content</p>
                <p>Drop down content</p>
                <p>Drop down content</p>

            </TextInputDropdown>
        </div>
    );

}

export const Default = Template.bind({});
Default.args = {
    focus: true,
    inputPlaceHolder: "Start typing.."
};
