import axios from "axios";

export const fetchPosts = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log(response);
  return response.data.map((post) => {
    return {
      title: post.title,
      body: post.body,
    };
  });
};
