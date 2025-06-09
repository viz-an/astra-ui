import type { Meta, StoryObj } from "@storybook/react";
import Select from ".";

const selectOptions = [
  { value: "", label: "Choose an option", disabled: true },
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
  { value: "option4", label: "Option 4" },
  { value: "option5", label: "Option 5" },
];
const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {
    options: selectOptions,
    className: "w-64",
    label: "Single select",
  },
};

export const Multi: Story = {
  args: {
    options: selectOptions,
    className: "w-64",
    multiple: true,
    label: "Multiple select with helper text at bottom",
    helperText: "You can choose multiple options",
  },
};
export const Error: Story = {
  args: {
    options: selectOptions,
    className: "w-64",
    label: "With error",
    error: "Option is required",
  },
};
