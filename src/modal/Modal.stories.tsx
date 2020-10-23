import React from "react";
import {Modal, ModalProps} from "./Modal";
import {Meta, Story} from "@storybook/react/types-6-0";

export default {
    title: 'Feedback/Modal',
    component: Modal,
    decorators: [story => <div style={{padding: '2rem', background: '#f5f5f5'}}>{story()}</div>],
} as Meta;

const Template: Story<ModalProps> = (args) => <Modal {...args}><h2>Modal title</h2>
    <section>Modal Mody</section>
</Modal>

export const Default = Template.bind({});
Default.args = {
    show: true,
    setShow: () => {
    }
}
