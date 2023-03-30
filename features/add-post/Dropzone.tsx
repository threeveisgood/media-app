import axios from "axios";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

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
  let fileUrls: string[] = [];

  const onDrop = (accpedtedFiles: File[]) => {
    const formData = new FormData();

    for (const file of accpedtedFiles) {
      formData.append("files", file);
      console.log(file);
    }

    // axios
    //   .post("http://localhost:1337/api/upload", formData, {
    //     headers: { "Content-Type": "multipart/form-data" },
    //   })
    //   .then((res) => {
    //     console.log(res);
    //     res.data.map((link: FileData) => {
    //       fileUrls.push(link.url);
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [],
    },
    multiple: true,
    onDrop,
  });

  return (
    <div className="flex justify-center">
      <div className="flex w-[650px] justify-center bg-slate-200 dark:bg-slate-900">
        <div
          data-testid="dropzoneRoot"
          className="cursor-pointer w-full flex justify-center py-10 dark:text-white"
          {...getRootProps()}
        >
          <input {...getInputProps()} data-testid="drop-input" />
          {isDragActive ? (
            <p>여기에 파일을 드랍해주세요...</p>
          ) : (
            <p> 이미지를 드랍하거나 클릭해주세요</p>
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
