import React, {useState} from "react";
import {Backdrop, BackdropProps} from "./Backdrop";
import {Meta, Story} from '@storybook/react';
import {Button} from "..";

export default {
    title: "Feedback/Backdrop",
    component: Backdrop,
} as Meta;
const Template: Story<BackdropProps> = () => {
    const [show, setShow] = useState(false);
    return (
        <React.Fragment>

            <Button onClick={() => {
                setShow(true)
            }} variant="tertiary"> {show ? "Click anywhere in the backdrop" : "Click to see backdrop"}</Button>
            <Backdrop show={show} backdropClickHandler={() => {
                setShow(false)
            }}/>
        </React.Fragment>
    );
}


export const Default = Template.bind({});
