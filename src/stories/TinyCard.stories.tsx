import { Meta, StoryFn } from "@storybook/react";
import { TinyCard, CardProps } from "../components/TinyCard";

export default {
  title: "Components/TinyCard",
  component: TinyCard,
} as Meta;

const Template: StoryFn<CardProps> = (args) => <TinyCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: "default-tiny-card",
  imageSrc: "https://picsum.photos/200/300",
};

export const WithLongText = Template.bind({});
WithLongText.args = {
  className: "long-text-tiny-card",
  imageSrc: "https://picsum.photos/200/300",
  children: (
    <div>
      <h2>Title</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  ),
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
  className: "no-image-tiny-card",
  children: (
    <div>
      <h2>Title</h2>
      <p>
        This is a tiny card without an image. It only contains text content.
      </p>
    </div>
  ),
};
