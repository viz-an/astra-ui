import type { Meta, StoryObj } from "@storybook/react";
import Badge from ".";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "About",
    variant: "default",
  },
};

export const Primary: Story = {
  args: {
    children: "About",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "About",
    variant: "secondary",
  },
};

export const Outline: Story = {
  args: {
    children: "About",
    variant: "outline",
  },
};

export const Success: Story = {
  args: {
    children: "About",
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    children: "About",
    variant: "warning",
  },
};

export const Danger: Story = {
  args: {
    children: "About",
    variant: "danger",
  },
};
