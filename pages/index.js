import Layout from "layouts/Main";
import { getPosts } from "store/actions/posts";
import Post from "components/Post";

const IndexPage = ({ posts }) => (
  <Layout>
    <ul>
      {posts.map((p) => (
        <Post key={p.title} post={p} />
      ))}
    </ul>
  </Layout>
);

IndexPage.getInitialProps = async (ctx) => {
  const { posts } = await ctx.store.dispatch(getPosts());
  return { posts };
};

export default IndexPage;
