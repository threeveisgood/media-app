import * as React from "react";
import Dropzone from "./upload/Dropzone";
import Input from "../../common/input";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { Post, postState } from "../../atoms/post";
import Editor from "./editor";

interface IAddPostProps {}

const AddPost: React.FunctionComponent<IAddPostProps> = (props) => {
  const [postValue, set] = useRecoilState(postState);
  //const set = useSetRecoilState(postState);

  const onChangeValue =
    (propName: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      set((prev) => ({ ...prev, [propName]: value }));
      console.log(postValue);
    };

  return (
    <div className="flex flex-col justify-center max-w-4xl m-0 m-auto ">
      <div>
        <Input
          placeholder="제목을 입력하세요"
          name="title"
          onChange={onChangeValue("title")}
        />
      </div>
      <div className=" mt-12">
        <Editor onChange={onChangeValue("body")} />
      </div>
      <div className=" mt-24">
        <Dropzone />
      </div>
    </div>
  );
};

export default AddPost;
