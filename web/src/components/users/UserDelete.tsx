import { FC } from "React";
import { useParams } from "react-router-dom";
import { graphql, useLazyLoadQuery } from "react-relay";
import { UserDelete_Query } from "~/src/__relay_artifacts__/UserDelete_Query.graphql";

const query = graphql`
  mutation UserDelete_Query($id: ID!) {
    deleteUser (
      input: {
        id: $id
      }
    ){
      user {
        id
      }
    }
  }
`;
export const UserDelete:FC = () => {
  const { userId = "" } = useParams();
  const { deleteUser } = useLazyLoadQuery<UserDelete_Query>(query, {id: userId})
  const user = deleteUser?.user;

  return (
    <ul>
        <li>{user?.id}</li>
    </ul>
  )
}
