import Link from "next/link";
import Wrapper from "./Wrapper";

const PostItem = ({ post }) => (
  <Wrapper>
    <Link href={`/post/[id]?id=${post.title}`} as={`/post/${post.title}`}>
      <a>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </a>
    </Link>
  </Wrapper>
);

export default PostItem;
