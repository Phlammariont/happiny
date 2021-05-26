import React from 'react'
import MainActionButton from './MainAction'
import '../../App.css'

export default {
  title: 'MainActionButton',
  component: MainActionButton,
};

const Template = (args) => <MainActionButton {...args} />;

export const Base = Template.bind({});

Base.args = {
  children: 'ActionButton'
};
