import { FC } from "React";
import { graphql, useLazyLoadQuery } from "react-relay";
import { UserCreate_Mutation } from "~/src/__relay_artifacts__/UserCreate_Mutation.graphql";

const mutation = graphql`
  mutation UserCreate_Mutation(
      $input: CreateUserInput!
    ) {
    createUser (input: $input){
      user {
        id
        name
        email
      }
    }
  }
`;
export const UserCreate:FC = () => {
  const name: string = "test";
  const email: string = "test@test.com";

  const { createUser } = useLazyLoadQuery<UserCreate_Mutation>(
    mutation,
    {
      input: {
        name: name,
        email: email,
      }
    }
  )
  const user = createUser?.user;
  return (
    <ul>
        <li>{user?.id}</li>
        <li>{user?.name}</li>
        <li>{user?.email}</li>
    </ul>
  )
}
