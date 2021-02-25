import React, {useState} from 'react';
import {Icon, IconProps} from "./Icon";
import {Meta, Story} from '@storybook/react';
import './assets/IconStories.scss';
import {Button, Input} from "..";
import {drawings} from "./Drawings";

export default {
    title: 'Visual/Icons',
    component: Icon,
    argTypes: {
        color: {control: 'color'},
    },
} as Meta;


const Template: Story<IconProps> = (args) => <div><Icon {...args} /></div>;

export const Default = Template.bind({});
Default.args = {
    name: 'muncher',
    size: 'small'
};

export const Medium = Template.bind({});
Medium.args = {
    ...Default.args,
    size: 'medium',
    weight: 1
};

export const Large = Template.bind({});
Large.args = {
    ...Medium.args,
    size: 'large'
}
export const Dark = Template.bind({});
Dark.args = {
    ...Medium.args,
    weight: 2
};
const TextTemplate: Story<IconProps> = (args) => <Icon {...args} ><p>Text</p></Icon>;
export const IconWithText = TextTemplate.bind({});
IconWithText.args = {
    name: 'muncher',
    size: 'small'
};
export const TextRight = TextTemplate.bind({});
TextRight.args = {
    name: 'muncher',
    size: 'small',
    orientation:'right'
};
const SearchTemplate: Story<IconProps> = () => {

    const [query, setQuery] = useState("");
    return (
        <div className="icon-search-story">
            <Input name={query} onChange={(e) => setQuery(e.target.value)} icon={"search"}/>
            {
                Object.keys(drawings).filter(key => key.search(new RegExp(query.replace(/\s*/g, ""), "i")) > -1).map(key =>
                    <Button key={key} size="small" rounded={true} title={key} variant={"tertiary"}>
                        <Icon iconString={key}/>
                    </Button>
                )
            }

        </div>
    );
};
export const Search = SearchTemplate.bind({});

