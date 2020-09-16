import Link from "next/link";
import styles from "./Post.module.scss";

const PostItem = ({ post }) => (
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
