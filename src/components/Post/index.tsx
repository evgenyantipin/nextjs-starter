import React from 'react';
import Link from 'next/link';
import styles from './Post.module.scss';
import type { IPost } from 'types/IPost';

interface PageProps {
  post: IPost;
}

const Post: React.FC<PageProps> = ({ post }) => (
  <div className={styles.post}>
    <Link href={`/post/[id]?id=${post.title}`} as={`/post/${post.title}`}>
      <a>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </a>
    </Link>
  </div>
);

export default Post;
