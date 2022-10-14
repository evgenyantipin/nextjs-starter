import fetch from "isomorphic-unfetch";

export const getPosts = () => {
  const posts = fetch("https://jsonplaceholder.typicode.com/posts").then((r) =>
    r.json()
  );
  return posts;
};

export const getPost = (slug) => {
  const post = fetch(
    `https://jsonplaceholder.typicode.com/posts?title=${slug}`
  ).then((r) => r.json());
  return post;
};
