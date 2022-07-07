import { FC } from "React";
import { graphql, useLazyLoadQuery } from "react-relay";
import { CommentCreate_Mutation } from "~/src/__relay_artifacts__/CommentCreate_Mutation.graphql";

const mutation = graphql`
  mutation CommentCreate_Mutation (
    $input: CreateCommentInput!
    ) {
    createComment (input: $input){
      comment {
        name
      }
    }
  }
`;
export const CommentCreate:FC = () => {
  const name: string = "タイトル";


  const { createComment } = useLazyLoadQuery<CommentCreate_Mutation>(
    mutation,
    {
      input: {
        name: name,
        postId: 1
      },
    }
  )
  const comment = createComment?.comment;

  return (
    <ul>
        <li>{comment?.name}</li>
    </ul>
  )
}
