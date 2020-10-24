import React, {useState} from "react";
import {Modal, ModalProps} from "./Modal";
import {Meta, Story} from "@storybook/react/types-6-0";
import {Button} from "..";
import "./assets/ModalStory.scss";
export default {
    title: 'Feedback/Modal',
    component: Modal,
    decorators: [story => <div style={{padding: '2rem', background: '#f5f5f5'}}>{story()}</div>],
} as Meta;

const Template: Story<ModalProps> = () => {
    const [show, setShow] = useState(false);
    return (
        <div className="muncher-modal-story">
            <Button variant="tertiary" onClick={() => {
                setShow(true)
            }}>Show Modal</Button>
            <Modal show={show} setShow={setShow}><h2>Modal title</h2>
                <section>Modal Mody</section>
            </Modal>
        </div>

    )
};


export const Default = Template.bind({});
