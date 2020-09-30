import React from "react";
import Modal from "./Modal";

export default {
    title: 'Modal',
    component: Modal
}

const Template = (args) => <Modal {...args}><h2>Modal title</h2>
    <section>Modal Mody</section>
</Modal>

export const Default = Template.bind({});
Default.args = {
    show: true,
    modalCloseHandler: () => {
    }
}