import * as React from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface IEditorProps {}

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["blockquote", "code-block", "link"],
  ],
};

const Editor: React.FunctionComponent<IEditorProps> = (props) => {
  return (
    <>
      <ReactQuill
        theme="snow"
        modules={modules}
        //onChange={handleChangeQuillBody}
        //defaultValue={originalPostId != "" ? body : ``}
      />
    </>
  );
};

export default Editor;
