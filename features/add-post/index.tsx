import { useCallback } from "react";
import Dropzone from "./upload/Dropzone";
import TitleInput from "../../common/title-input";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { postState } from "../../atoms/post";
import Editor from "./editor";
import Select from "../../common/select";
import { categories } from "../../lib/categories";
import Input from "../../common/input";
import Label from "./label";

interface IAddPostProps {}

const AddPost: React.FunctionComponent<IAddPostProps> = (props) => {
  const [postValue, set] = useRecoilState(postState);
  //const set = useSetRecoilState(postState);

  const onChangeValue = useCallback(
    (propName: string) =>
      (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const value = e.target.value;
        set((prev) => ({ ...prev, [propName]: value }));
        console.log(postValue);
      },
    [postValue, set]
  );

  const onPasteValue = useCallback(
    (propName: string) => (e: React.ClipboardEvent<HTMLInputElement>) => {
      const value = e.clipboardData.getData("text");
      set((prev) => ({ ...prev, [propName]: value }));
    },
    [set]
  );

  return (
    <div className="flex flex-col justify-center max-w-4xl mx-auto">
      <div>
        <TitleInput
          placeholder="제목을 입력하세요"
          name="title"
          onChange={onChangeValue("title")}
          onPaste={onPasteValue("title")}
        />
      </div>
      <div className="mt-5">
        <Label text="상품 종류" />
        <Select data={categories} onChange={onChangeValue("category")} />
      </div>
      <div className="mt-5">
        <Label text="가격" />
        <Input
          size="sm"
          onChange={onChangeValue("price")}
          onPaste={onPasteValue("price")}
        />
      </div>
      <div className="mt-5">
        <Label text="배송비" />
        <Input
          size="sm"
          onChange={onChangeValue("shipping")}
          onPaste={onPasteValue("shipping")}
        />
      </div>
      <div className="mt-5">
        <Label text="쇼핑몰" />
        <Input
          size="sm"
          onChange={onChangeValue("store")}
          onPaste={onPasteValue("store")}
        />
      </div>
      <div className="mt-5">
        <Label text="상품 관련 URL" />
        <Input
          size="lg"
          onChange={onChangeValue("productURL")}
          onPaste={onPasteValue("productURL")}
        />
      </div>
      <div className="mt-10">
        <Editor />
      </div>
      <div className="mt-8">
        <Dropzone />
      </div>
    </div>
  );
};

export default AddPost;
