import { FC } from "React";
import { graphql, useLazyLoadQuery } from "react-relay";
import { UserList_Query } from "~/src/__relay_artifacts__/UserList_Query.graphql";

const query = graphql`
  query UserList_Query {
    users {
      name
      email
    }
  }
`;

export const UserList:FC = () => {
  const { users } = useLazyLoadQuery<UserList_Query>(query, {});

  return (
    <ul>
      {users.map((user, index) => {
        return <li>{user.name}</li>
      })}
    </ul>
  )
}
