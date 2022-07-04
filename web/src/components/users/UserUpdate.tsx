import { FC } from "React";
import { useParams } from "react-router-dom";

import { graphql, useLazyLoadQuery } from "react-relay";
import { UserUpdate_Mutation } from "~/src/__relay_artifacts__/UserUpdate_Mutation.graphql";

const mutation = graphql`
  mutation UserUpdate_Mutation($input: UpdateUserInput!) {
    updateUser (input: $input){
      user {
        id
        name
        email
      }
    }
  }
`;
export const UserUpdate:FC = () => {
  const { userId = "" } = useParams();
  const name: string = "test";
  const email: string = "test@test.com";
  const { updateUser } = useLazyLoadQuery<UserUpdate_Mutation>(
    mutation,
    {
      input: {
        id: userId,
        name: name,
        email: email,
      }
    }
  )
  const user = updateUser?.user;
  return (
    <ul>
        <li>{user?.id}</li>
        <li>{user?.name}</li>
        <li>{user?.email}</li>
    </ul>
  )
}
