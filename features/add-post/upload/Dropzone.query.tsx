import { useMutation } from "@tanstack/react-query";
import client from "../../../lib/client";

async function upload(formData: FormData): Promise<string[]> {
  const { data } = await client.post("/upload", formData);

  return data;
}

export default function useDropzoneUpload() {
  const mutation = useMutation(upload);

  return mutation;
}
