import Layout from "layouts/Main";
import { getPost } from "store/actions/posts";
import styles from "./Post.module.scss";

const PostPage = ({ post }) => (
  <Layout>
    <div className={styles.post}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  </Layout>
);

PostPage.getInitialProps = async (ctx) => {
  const slug = ctx.query.id;
  const { post } = await ctx.store.dispatch(getPost(slug));
  return { post };
};

export default PostPage;
