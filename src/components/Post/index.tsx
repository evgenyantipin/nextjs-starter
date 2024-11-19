import React from 'react';
import Link from 'next/link';
import styles from './Post.module.scss';
import type { IPost } from 'types/IPost';

type PageProps = {
  post: IPost;
};

const Post = (props: PageProps) => {
  const { post } = props;

  return (
    <div className={styles.post}>
      <Link href={`/post/[id]?id=${post.title}`} as={`/post/${post.title}`}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </Link>
    </div>
  );
};

export default Post;
