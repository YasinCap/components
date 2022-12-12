import React from "react";

import { Button } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const dark = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
dark.args = {
  darkMode: true,
  text: "Button",
};

export const light = Template.bind({});
light.args = {
  text: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  text: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  text: "Button",
};
