import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import Layout from 'layouts/Main';
import { getPosts } from 'api/posts';
import Post from 'components/Post';
import type { IPost } from 'types/IPost';

interface PageProps {
  posts: IPost[];
}

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await getPosts();
  return {
    props: {
      posts
    }
  };
};

const IndexPage: NextPage<PageProps> = ({ posts }) => (
  <Layout>
    <ul>
      {posts.map((p) => (
        <Post key={p.title} post={p} />
      ))}
    </ul>
  </Layout>
);

export default IndexPage;
