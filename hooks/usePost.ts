import { useRecoilValue } from "recoil";
import { postState } from "../atoms/post";

export default function usePost() {
  return useRecoilValue(postState);
}
