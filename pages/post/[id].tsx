import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import Layout from 'layouts/Main';
import { getPost } from 'api/posts';
import styles from './Post.module.scss';
import type { IPost } from 'types/IPost';

interface PageProps {
  post: IPost;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = await getPost(params?.id as string);
  return {
    props: {
      post: post[0]
    }
  };
};

const PostPage: NextPage<PageProps> = ({ post }) => (
  <Layout>
    <div className={styles.post}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  </Layout>
);

export default PostPage;
