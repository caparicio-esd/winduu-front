import { Button } from "@/components/ui/button";
import { Meta, StoryObj } from "@storybook/react";
import { title } from "process";

const meta = {
  title: "Winduu/Button",
  component: Button,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "hola",
    variant: "outline",
  },
};
