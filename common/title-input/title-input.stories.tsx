import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import titleInput from "./index";

const meta: Meta<typeof titleInput> = {
  title: "design system/common/Title Input",
  component: titleInput,
  parameters: {
    componentSubtitle: "제목 텍스트를 입력하는 요소입니다.",
  },
  argTypes: {
    placeholder: {
      description: "title을 입력할 때 보여지는 placeholder입니다.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "텍스트를 입력해주세요." },
      },
      control: { type: "text" },
    },
    onChange: {
      description: "title이 변경될 때 실행되는 함수입니다.",
      table: {
        type: { summary: "function" },
        defaultValue: {
          summary: "(e: React.ChangeEvent<HTMLInputElement>) => void",
        },
      },
    },
    onPaste: {
      description: "title에 텍스트를 붙혀넣기 할 때 실행되는 함수입니다.",
      table: {
        type: { summary: "function" },
        defaultValue: {
          summary: "(e: React.ClipboardEvent<HTMLInputElement>) => void",
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof titleInput>;

export const PostTitle: Story = {
  args: {
    placeholder: "텍스트를 입력해주세요.",
    onChange: () => {},
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inputEl = canvas.getByTestId("input") as HTMLInputElement;

    await userEvent.type(inputEl, "hello");

    expect(inputEl.value).toBe("hello");
  },
};
