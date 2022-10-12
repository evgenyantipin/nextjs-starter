import Layout from "../src/layouts/Main";
import { getPosts } from "../src/api/posts";
import Post from "../src/components/Post";

export async function getServerSideProps(ctx) {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
  };
}

const IndexPage = ({ posts }) => (
  <Layout>
    <ul>
      {posts.map((p) => (
        <Post key={p.title} post={p} />
      ))}
    </ul>
  </Layout>
);

export default IndexPage;
