import { Meta, StoryFn } from "@storybook/react";
import CustomCard, { CardProps } from "../components/CustomCard";
export default {
  title: "Components/CustomCard",
  component: CustomCard,
} as Meta;

const Template: StoryFn<CardProps> = (args) => <CustomCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageSrc: "https://picsum.photos/200/300",
};

export const WithLongText = Template.bind({});
WithLongText.args = {
  imageSrc: "",
  children: (
    <div>
      <h2>Title</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  ),
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
  children: (
    <div>
      <h2>Title</h2>
      <p>This is a card without an image. It only contains text content.</p>
    </div>
  ),
};
