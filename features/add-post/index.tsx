import * as React from "react";
import Dropzone from "./upload/Dropzone";
import Input from "../../common/input";

interface IAddPostProps {}

const AddPost: React.FunctionComponent<IAddPostProps> = (props) => {
  return (
    <div className="flex flex-col justify-center max-w-4xl m-0 m-auto ">
      <div>
        <Input />
      </div>
      <Dropzone />
    </div>
  );
};

export default AddPost;
