import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import Editor from "./index";

const meta: Meta<typeof Editor> = {
  title: "design system/add post/Editor",
  component: Editor,
  parameters: {
    componentSubtitle: "글을 작성하기 위한 텍스트 에디터입니다.",
  },
};

export default meta;
type Story = StoryObj<typeof Editor>;

export const Primary: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const QuillEl = canvas.getByTestId("quill") as HTMLTextAreaElement;
    const quillEditor = QuillEl.querySelector(".ql-editor")!;

    await userEvent.click(quillEditor);

    await userEvent.type(quillEditor, "hello");

    expect(quillEditor).toHaveTextContent("hello");
  },
};
