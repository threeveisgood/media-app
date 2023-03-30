import { atom } from "recoil";

export interface Post {
  id: string;
  title: string;
  body: string;
  price: string;
  productURL: string;
  imageLinks: string[];
  username: string;
  shipping: string;
  store: string;
  category: string;
}

export const postState = atom<Post>({
  key: "postState",
  default: {
    id: "",
    title: "",
    body: "",
    price: "",
    productURL: "",
    imageLinks: [],
    username: "",
    shipping: "",
    store: "",
    category: "",
  },
});
