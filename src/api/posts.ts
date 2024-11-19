import wretch from 'wretch';

export const getPosts = () =>
  wretch('https://jsonplaceholder.typicode.com/posts').get().json();

export const getPost = (slug: string) =>
  wretch(`https://jsonplaceholder.typicode.com/posts?title=${slug}`)
    .get()
    .json();
