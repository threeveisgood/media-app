import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import Input from "./index";

const meta: Meta<typeof Input> = {
  title: "design system/common/Input",
  component: Input,
  parameters: {
    componentSubtitle: "제목 같은 테스트를 입력하는 요소입니다.",
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inputEl = canvas.getByTestId("input") as HTMLInputElement;

    await userEvent.type(inputEl, "hello");

    expect(inputEl.value).toBe("hello");
  },
};
