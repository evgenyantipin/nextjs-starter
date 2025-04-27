import Layout from 'layouts/Main';
import Carousel from 'components/Carousel';
import AccordionDemo from 'components/Accordion'
import { getPost } from 'api/posts';
import styles from './Post.module.css';
import { IPost } from 'types/IPost';

type PageProps = {
  post: IPost;
};

export const getServerSideProps = async ({ params }: any) => {
  const post: any = await getPost(params?.id as string);
  return {
    props: {
      post: post[0]
    }
  };
};

const PostPage = ({ post }: PageProps) => (
  <Layout>
    <div className={styles.post}>
      <h1>{post.title}</h1>
      <Carousel />
      <p>{post.body}</p>
      <AccordionDemo/>
    </div>
  </Layout>
);

export default PostPage;
