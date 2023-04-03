import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import Select from "./index";
import { categories } from "../../lib/categories";

const meta: Meta<typeof Select> = {
  title: "design system/common/Select",
  component: Select,
  parameters: {
    componentSubtitle: "여러 분류 중에서 하나를 선택할 수 있는 요소입니다.",
  },
  argTypes: {
    data: {
      description: "Select의 option 값입니다.",
      defaultValue: "카테고리를 선택해주세요",
      table: {
        type: { summary: "string[]" },
        defaultValue: { summary: "카테고리를 선택해주세요" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Categories: Story = {
  args: {
    data: categories,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const selectEl = canvas.getByTestId("select") as HTMLSelectElement;

    await userEvent.selectOptions(selectEl, "의류");

    expect(selectEl.value).toBe("의류");
  },
};
