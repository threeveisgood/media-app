export interface FilesUploadConfig {
  headers: {
    "content-type": string;
  };
}
export interface FilesUpload {
  formData: FormData;
  config: FilesUploadConfig;
}
