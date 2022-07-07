import { FC } from "react";
import { graphql, useFragment } from "react-relay";
import { UserListFragment_user$key } from "~/src/__relay_artifacts__/UserListFragment_user.graphql";
import { UserTableRow } from "./UserTableRow";

type Props = {
  userRef: UserListFragment_user$key,
};
const fragment = graphql`
  fragment UserListFragment_user on Query {
    users {
      id
      name
      email
      posts {
        edges {
          node {
            title
            content
          }
          cursor
        }
      }
    }
    posts(first: 3) @connection(key: "UserList_posts"){
      __id
      edges {
        node {
          title
          content
        }
      }
    }
  }
`;

export const UserList:FC<Props> = ({ userRef }) => {
  const data  = useFragment(fragment, userRef);

  const users = data.users;

  const connectionId = data.posts.__id;

  console.log(users)
  console.log(connectionId)
  return (
    <>
      <a href="/users">ユーザ一覧</a>
      <table>
        <tbody>
          {users.map((user: any, index: any) => {
            return <UserTableRow userRef={user} connectionId={connectionId} key={index}/>
          })}
        </tbody>
      </table>
      <a href="/post/new">投稿</a>
    </>
  )
}
