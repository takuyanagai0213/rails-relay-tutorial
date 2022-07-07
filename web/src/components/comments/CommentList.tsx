import { FC } from "React";
import { graphql, useLazyLoadQuery } from "react-relay";
import { CommentList_Query } from "~/src/__relay_artifacts__/CommentList_Query.graphql";

const query = graphql`
    query CommentList_Query {
        comments {
            name
        }
    }
`;
export const CommentList:FC = () => {
  const data = useLazyLoadQuery<CommentList_Query>(
    query,
    {}
  )

  const comments = data.comments;
  return (
    <ul>
        {comments.map((comment: any, index: any) => {
            return <li key={index}>{comment.node.name}</li>
        })}
    </ul>
  )
}
