import { FC } from "React";
import { graphql, useLazyLoadQuery } from "react-relay";
import { UserList } from "~/src/components/users/UserList";
import { UserListContainer_Query } from "~/src/__relay_artifacts__/UserListContainer_Query.graphql";

const query = graphql`
    query UserListContainer_Query {
      ...UserListFragment_user
    }
`;

export const UserListContainer:FC = () => {
  const users  = useLazyLoadQuery<UserListContainer_Query>(query, {});

  return <UserList userRef={users} />;
}
