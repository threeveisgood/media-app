import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import Input from "./index";

const meta: Meta<typeof Input> = {
  title: "design system/common/Input",
  component: Input,
  parameters: {
    componentSubtitle: "텍스트를 입력할 수 있는 요소입니다.",
  },
  argTypes: {
    size: {
      description: "input의 크기입니다.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "md" },
      },
      control: {
        type: "select",
      },
      options: ["sm", "md", "lg"],
    },
    onChange: {
      description: "input이 변경될 때 실행되는 함수입니다.",
      table: {
        type: { summary: "function" },
        defaultValue: {
          summary: "(e: React.ChangeEvent<HTMLInputElement>) => void",
        },
      },
    },
    onPaste: {
      description: "input에 텍스트를 붙혀넣기 할 때 실행되는 함수입니다.",
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
type Story = StoryObj<typeof Input>;

export const Categories: Story = {
  args: {
    size: "md",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inputEl = canvas.getByTestId("input") as HTMLInputElement;

    await userEvent.type(inputEl, "good afternoon");

    expect(inputEl.value).toBe("good afternoon");
  },
};
