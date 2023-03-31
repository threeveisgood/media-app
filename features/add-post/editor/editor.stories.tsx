import type { Meta, StoryObj } from "@storybook/react";
import { render } from "@testing-library/react";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { useEffect } from "react";
import Editor from "./index";
import { RecoilRoot, useRecoilValue } from "recoil";
import { postState } from "../../../atoms/post";
import { jest } from "@storybook/jest";

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
    const onChange = jest.fn();
    const canvas = within(canvasElement);

    render(
      <RecoilRoot>
        <RecoilObserver node={postState} onChange={onChange} />
      </RecoilRoot>
    );

    const QuillEl = canvas.getByTestId("quill") as HTMLTextAreaElement;
    const quillEditor = QuillEl.querySelector(".ql-editor")!;

    await userEvent.click(quillEditor);

    await userEvent.type(quillEditor, "hello");

    expect(QuillEl.value).toBe("hello");
  },
};

export const RecoilObserver = ({ node, onChange }: any) => {
  const value = useRecoilValue(node);
  useEffect(() => onChange(value), [onChange, value]);
  return null;
};
