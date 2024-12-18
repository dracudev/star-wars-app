import { Meta, StoryFn } from "@storybook/react";
import { Button, ButtonProps } from "../components/shadcn-ui/button";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Default Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "sm",
  children: "Small Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "lg",
  children: "Large Button",
};

export const Icon = Template.bind({});
Icon.args = {
  size: "icon",
  children: <span>🔍</span>,
};

export const Destructive = Template.bind({});
Destructive.args = {
  variant: "destructive",
  children: "Destructive Button",
};

export const Outline = Template.bind({});
Outline.args = {
  variant: "outline",
  children: "Outline Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  children: "Secondary Button",
};

export const Ghost = Template.bind({});
Ghost.args = {
  variant: "ghost",
  children: "Ghost Button",
};

export const Link = Template.bind({});
Link.args = {
  variant: "link",
  children: "Link Button",
};
