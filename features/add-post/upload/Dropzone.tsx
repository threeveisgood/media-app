import axios from "axios";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { BiImageAdd } from "react-icons/bi";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import useDropzoneUpload from "./Dropzone.query";

interface Formats {
  thumbnail: {
    ext: string;
    hash: string;
    height: number;
    mime: string;
    name: string;
    path: null;
    size: number;
    url: string;
    width: number;
  };
}

interface FileData {
  aleternativeText: null;
  caption: null;
  createdAt: Date;
  ext: string;
  formats: Formats;
  hash: string;
  height: number;
  id: number;
  mime: string;
  name: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  size: number;
  updatedAt: Date;
  url: string;
  width: number;
}

const Dropzone: React.FunctionComponent = () => {
  const [thumb, setThumb] = useState<string[]>([]);
  let fileUrls: string[] = [];
  const { mutate } = useDropzoneUpload();

  const onDrop = useCallback(async (accpedtedFiles: File[]) => {
    const formData = new FormData();
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };

    for (const file of accpedtedFiles) {
      formData.append("files", file);
    }

    mutate(
      { formData, config },
      {
        onSuccess: (data) => {
          console.log(data);
        },
      }
    );
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
