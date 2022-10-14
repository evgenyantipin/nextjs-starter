import React from 'react';
import Link from 'next/link';
import styles from './Post.module.scss';

interface Post {
  title: string;
  body: string;
}

interface PageProps {
  post: Post;
}

const PostItem: React.FC<PageProps> = ({ post }) => (
  <div className={styles.post}>
    <Link href={`/post/[id]?id=${post.title}`} as={`/post/${post.title}`}>
      <a>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </a>
    </Link>
  </div>
);

export default PostItem;
