import { FC } from "React";
import { graphql, useLazyLoadQuery } from "react-relay";
import { useNavigate } from "react-router-dom";
import { PostCreate_Mutation } from "~/src/__relay_artifacts__/PostCreate_Mutation.graphql";

const mutation = graphql`
  mutation PostCreate_Mutation (
    $input: CreatePostInput!
    ) {
    createPost
    (input: $input){
      post @appendNode(
        connections: $connections
        edgeTypeName: "PostEdge"
      )
    }
  }
`;
export const PostCreate:FC = () => {
  const title: string = "タイトル";
  const content: string = "内容";

  const { createPost } = useLazyLoadQuery<PostCreate_Mutation>(
    mutation,
    {
      input: {
        title: title,
        content: content,
        userId: "154"
      },
    }
  )
  const post = createPost?.post;
  const navigate = useNavigate();
  navigate(`/users`);

  return (
    <ul>
        <li>{post?.title}</li>
    </ul>
  )
}
