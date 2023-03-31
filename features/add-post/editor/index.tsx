import * as React from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { useSetRecoilState } from "recoil";
import { postState } from "../../../atoms/post";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["blockquote", "code-block", "link"],
  ],
};

const Editor: React.FunctionComponent = () => {
  const set = useSetRecoilState(postState);

  const handleChangeQuillBody = (text: string) => {
    const propName = "body";
    set((prev) => ({ ...prev, [propName]: text }));
  };

  return (
    <div data-testid="quill">
      <ReactQuill
        theme="snow"
        modules={modules}
        onChange={handleChangeQuillBody}
        //defaultValue={originalPostId != "" ? body : ``}
      />
    </div>
  );
};

export default Editor;
