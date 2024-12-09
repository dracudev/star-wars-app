import type { Meta, StoryObj } from "@storybook/react";
import { CustomCard } from "../components/CustomCard";

const meta: Meta<typeof CustomCard> = {
  title: "Components/CustomCard",
  component: CustomCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h2 className="mb-2 text-xl font-medium text-white">Card Title</h2>
        <p className="text-white">This is a card content.</p>
      </div>
    ),
  },
};

export const WithCustomContent: Story = {
  args: {
    children: (
      <div>
        <h2 className="mb-2 text-xl font-medium text-white">Custom Title</h2>
        <p className="text-white">
          This is some custom content inside the card.
        </p>
      </div>
    ),
  },
};
