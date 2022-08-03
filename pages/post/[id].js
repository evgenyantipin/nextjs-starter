import Layout from "layouts/Main";
import { getPost } from "api/posts";
import styles from "./Post.module.scss";

export async function getServerSideProps({ params }) {
  const post = await getPost(params?.id);
  return {
    props: {
      post: post[0],
    },
  };
}

const PostPage = ({ post }) => (
  <Layout>
    <div className={styles.post}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  </Layout>
);

export default PostPage;
