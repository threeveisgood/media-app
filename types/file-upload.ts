export interface FilesUploadConfig {
  headers: {
    "content-type": string;
  };
}
export interface FilesUpload {
  formData: FormData;
  config: FilesUploadConfig;
}

// backend's upload data type
export interface Formats {
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

export interface FileData {
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

// use for delete uploaded file
export interface UploadedFile {
  id: number;
  thumbnailUrl: string;
}
