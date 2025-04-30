import { GetServerSideProps, NextPage } from 'next';
import Layout from 'layouts/Main';
import Carousel from 'components/Carousel';
import AccordionDemo from 'components/Accordion';
import { getPost } from 'api/posts';
import styles from './Post.module.css';
import { IPost } from 'types/IPost';

export const getServerSideProps: GetServerSideProps<PageProps> = async ({
  params
}) => {
  const id = params?.id as string;

  if (!id) {
    return {
      notFound: true
    };
  }

  const postData: any = await getPost(id);

  if (!postData?.length) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      post: postData?.[0]
    }
  };
};

type PageProps = {
  post: IPost;
};

const PostPage: NextPage<PageProps> = (props) => {
  const { post } = props;
  return (
    <Layout>
      <div className={styles.post}>
        <h1>{post.title}</h1>
        <Carousel />
        <p>{post.body}</p>
        <AccordionDemo />
      </div>
    </Layout>
  );
};

export default PostPage;
