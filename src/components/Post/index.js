import { Link } from "routes";
import Wrapper from "./Wrapper";

const PostItem = ({ post }) => (
  <Wrapper>
    <Link route="post" params={{ id: post.title }}>
      <a>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </a>
    </Link>
  </Wrapper>
);

export default PostItem;
