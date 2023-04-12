import { useMutation } from "@tanstack/react-query";
import client from "../../../lib/client";
import { FileData } from "../../../types/file-upload";

async function upload(formData: FormData): Promise<FileData[]> {
  const { data } = await client.post("/upload", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return data;
}

export default function useDropzoneUpload() {
  const mutation = useMutation(upload);

  return mutation;
}
