import { Dispatch } from 'redux';
import fetch from 'isomorphic-unfetch';

export const getPosts = () => async (dispatch: Dispatch) => {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then(
    (r) => r.json()
  );
  return dispatch({ type: 'GET_POSTS', posts: posts });
};

export const getPost = (slug: string) => async (dispatch: Dispatch) => {
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts?title=${slug}`
  ).then((r) => r.json());
  return dispatch({ type: 'GET_POST', post: post[0] });
};
