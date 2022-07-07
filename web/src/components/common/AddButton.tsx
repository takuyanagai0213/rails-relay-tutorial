import { FC, useCallback } from "react";
import { graphql, useMutation, useFragment } from "react-relay";

import { AddButtonCreatePost_Mutation } from "~/src/__relay_artifacts__/AddButtonCreatePost_Mutation.graphql";

type Props = {
    userRef: {
      id: string,
    }
    connectionID: any
}
const mutation = graphql`
  mutation AddButtonCreatePost_Mutation (
      $connections: [ID!]!
      $input: CreatePostInput!
    ) {
    createPost (input: $input){
      post @appendNode(
        connections: $connections
        edgeTypeName: "PostEdge"
      ) {
        id
        title
        content
      }
    }
  }
`;

export const AddButton:FC<Props> = ({ userRef, connectionID }) => {
    const [ mutate ] = useMutation<AddButtonCreatePost_Mutation>(mutation);

    const handleSubmit = useCallback(
      () => {
        mutate({
          variables: {
            input: {
              title: "タイトルCCC",
              content: "内容ーーー",
              userId: userRef.id
            },
            connections: [connectionID]
          },
        })
      },
      [mutate, userRef, connectionID]
    );
    return (
        <button onClick={handleSubmit}>追加</button>
    )
  }
