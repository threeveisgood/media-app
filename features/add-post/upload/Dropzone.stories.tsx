import type { Meta, StoryObj } from "@storybook/react";
import Dropzone from "./Dropzone";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<typeof Dropzone> = {
  title: "design system/add post/Dropzone",
  component: Dropzone,
  parameters: {
    componentSubtitle:
      "드래그 앤 드랍 또는 클릭해서 이미지나 비디오를 업로드하게 해주는 요소입니다.",
  },
};

export default meta;
type Story = StoryObj<typeof Dropzone>;

export const FileUpload: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inputEl = canvas.getByTestId("drop-input") as HTMLInputElement;

    const files = [
      new File(["hello"], "hello.png", { type: "image/png" }),
      new File(["there"], "there.jpg", { type: "image/jpg" }),
    ];

    await userEvent.upload(inputEl, files);

    expect(inputEl.files).toHaveLength(2);
    expect(inputEl.files?.[0]).toStrictEqual(files[0]);
    expect(inputEl.files?.[1]).toStrictEqual(files[1]);
  },
};
