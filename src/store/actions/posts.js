import axios from "axios";

export const getPosts = () => async dispatch => {
  const posts = await axios("https://jsonplaceholder.typicode.com/posts");
  return dispatch({ type: "GET_POSTS", posts: posts.data });
};

export const getPost = slug => async dispatch => {
  const post = await axios(`https://jsonplaceholder.typicode.com/posts?title=${slug}`);
  return dispatch({ type: "GET_POST", post: post.data[0] });
};
