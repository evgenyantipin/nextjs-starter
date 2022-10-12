import fetch from "isomorphic-unfetch";

export const getPosts = () => async (dispatch) => {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (r) => r.json()
  );
  return dispatch({ type: "GET_POSTS", posts: posts });
};

export const getPost = (slug) => async (dispatch) => {
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts?title=${slug}`
  ).then((r) => r.json());
  return dispatch({ type: "GET_POST", post: post[0] });
};
