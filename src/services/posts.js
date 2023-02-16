import axios from "axios";
import { store } from "./../store/store";
import { router } from "./../main";
export const fetchPosts = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log(response);
  return response.data.map((post) => {
    return {
      id: post.id,
      title: post.title,
      body: post.body,
    };
  });
};

export const addPost = () => {
  store.commit("saveThisPost");
  router.push({ path: "post" });
};
