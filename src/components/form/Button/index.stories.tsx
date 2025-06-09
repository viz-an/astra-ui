import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Click me",
    variant: "primary",
    size: "md",
    fullWidth: false,
  },
};

export const Secondary: Story = {
  args: {
    children: "Click me",
    variant: "secondary",
    size: "md",
    fullWidth: false,
  },
};

export const Ghost: Story = {
  args: {
    children: "Click me",
    variant: "ghost",
    size: "md",
    fullWidth: false,
  },
};

export const Outline: Story = {
  args: {
    children: "Click me",
    variant: "outline",
    size: "md",
    fullWidth: false,
  },
};

export const Destructive: Story = {
  args: {
    children: "Click me",
    variant: "destructive",
    size: "md",
    fullWidth: false,
  },
};
