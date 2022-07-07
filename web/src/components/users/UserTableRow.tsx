import { FC } from "react";
import { AddButton } from "~/src/components/common/AddButton";

type Props = {
  userRef: any
  connectionId: any
}
export const UserTableRow:FC<Props> = ({ userRef, connectionId }) => {

  const posts = userRef.posts.edges;

  return (
    <tr>
      <td>{userRef.name}</td>
      <td>{userRef.email}</td>
      <td><AddButton userRef={userRef} connectionID={connectionId} key={userRef}></AddButton></td>
      {posts &&
        <>
          {posts.map((post: any, index: any) => {
              return <td key={index}>{post.node.title}</td>
          })}
        </>
      }
    </tr>
  )
}
