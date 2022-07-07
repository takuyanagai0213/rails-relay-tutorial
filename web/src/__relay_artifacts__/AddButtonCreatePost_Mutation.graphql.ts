/**
 * @generated SignedSource<<1a51a0d747a97ad64fc317684a1d7971>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreatePostInput = {
  clientMutationId?: string | null;
  title: string;
  content?: string | null;
  userId: string;
};
export type AddButtonCreatePost_Mutation$variables = {
  connections: ReadonlyArray<string>;
  input: CreatePostInput;
};
export type AddButtonCreatePost_MutationVariables = AddButtonCreatePost_Mutation$variables;
export type AddButtonCreatePost_Mutation$data = {
  readonly createPost: {
    readonly post: {
      readonly id: string;
      readonly title: string | null;
      readonly content: string | null;
    } | null;
  } | null;
};
export type AddButtonCreatePost_MutationResponse = AddButtonCreatePost_Mutation$data;
export type AddButtonCreatePost_Mutation = {
  variables: AddButtonCreatePost_MutationVariables;
  response: AddButtonCreatePost_Mutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "connections"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "concreteType": "Post",
  "kind": "LinkedField",
  "name": "post",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "content",
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AddButtonCreatePost_Mutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreatePostPayload",
        "kind": "LinkedField",
        "name": "createPost",
        "plural": false,
        "selections": [
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddButtonCreatePost_Mutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreatePostPayload",
        "kind": "LinkedField",
        "name": "createPost",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "appendNode",
            "key": "",
            "kind": "LinkedHandle",
            "name": "post",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              },
              {
                "kind": "Literal",
                "name": "edgeTypeName",
                "value": "PostEdge"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "a74a40db43fee16b41499938791a1e6e",
    "id": null,
    "metadata": {},
    "name": "AddButtonCreatePost_Mutation",
    "operationKind": "mutation",
    "text": "mutation AddButtonCreatePost_Mutation(\n  $input: CreatePostInput!\n) {\n  createPost(input: $input) {\n    post {\n      id\n      title\n      content\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "852ecb55e60e024e48b608ff4c6040e4";

export default node;
