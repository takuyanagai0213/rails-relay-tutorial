import { FC } from "React";
import { graphql, useLazyLoadQuery } from "react-relay";
import { PostList_Query } from "~/src/__relay_artifacts__/PostList_Query.graphql";

const query = graphql`
    query PostList_Query {
        posts {
          edges {
            node {
              title
              content
            }
          }
        }
    }
`;
export const PostList:FC = () => {
  const data = useLazyLoadQuery<PostList_Query>(
    query,
    {}
  )

  const posts = data.posts.edges;
  return (
    <ul>
        {posts.map((post: any, index: any) => {
            return <li key={index}>{post.node.title}</li>
        })}
    </ul>
  )
}
