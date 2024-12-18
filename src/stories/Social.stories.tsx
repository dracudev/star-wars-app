import { Meta, StoryFn } from "@storybook/react";
import { Social, SocialProps } from "../components/Social";

export default {
  title: "Components/Social",
  component: Social,
} as Meta;

const Template: StoryFn<SocialProps> = (args) => <Social {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: "default-social",
};

export const CustomClass = Template.bind({});
CustomClass.args = {
  className: "custom-social-class",
};
