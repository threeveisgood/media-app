import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { BiImageAdd } from "react-icons/bi";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import useDropzoneUpload from "./Dropzone.query";
import { postState } from "../../../atoms/post";
import { FileData, UploadedFile } from "../../../types/file-upload";

const Dropzone: React.FunctionComponent = () => {
  const [fileUrls, setFileUrls] = useState<string[]>([]);
  const [UploadFileInformation, setUploadFileInformation] = useState<
    UploadedFile[]
  >([]);
  const [thumb, setThumb] = useState<string[]>([]);
  const [postValue, setPostValue] = useRecoilState(postState);
  const { mutate } = useDropzoneUpload();

  const onDrop = useCallback(async (accpedtedFiles: File[]) => {
    const formData = new FormData();

    for (const file of accpedtedFiles) {
      formData.append("files", file);
    }

    mutate(formData, {
      onSuccess: (data) => {
        console.log(data);
        const urls = data.map((file: FileData) => file.url);
        const fileInformation = data.map((file: FileData) => ({
          id: file.id,
          thumbnailUrl: file.formats.thumbnail.url,
        }));

        setUploadFileInformation((prev) => [...prev, ...fileInformation]);
        setPostValue((prev) => ({
          ...prev,
          imageLinks: [...prev.imageLinks, ...urls],
        }));
        console.log(postValue);
      },
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [],
    },
    multiple: true,
    onDrop,
  });

  return (
    <div className="flex justify-center">
      <div className="flex w-full rounded-md justify-center bg-slate-100 dark:bg-slate-800">
        <div
          data-testid="dropzoneRoot"
          className="cursor-pointer w-full flex justify-center py-10 dark:text-white"
          {...getRootProps()}
        >
          <input {...getInputProps()} data-testid="drop-input" />
          {isDragActive ? (
            <p>여기에 파일을 드랍해주세요...</p>
          ) : (
            <div className="flex flex-col items-center">
              <div className="text-3xl">
                <BiImageAdd />
              </div>
              <p>이미지를 드랍하거나 여기를 클릭해주세요</p>
            </div>
          )}
          <div>
            {fileUrls.map((file: any) => (
              <p key={file.name}>{file.url}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropzone;
