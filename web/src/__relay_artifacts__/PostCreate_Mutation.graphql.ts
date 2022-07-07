/**
 * @generated SignedSource<<40bd30e8bfa18e39d785d8b031fbdf22>>
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
export type PostCreate_Mutation$variables = {
  input: CreatePostInput;
};
export type PostCreate_MutationVariables = PostCreate_Mutation$variables;
export type PostCreate_Mutation$data = {
  readonly createPost: {
    readonly post: {
      readonly title: string | null;
      readonly content: string | null;
    } | null;
  } | null;
};
export type PostCreate_MutationResponse = PostCreate_Mutation$data;
export type PostCreate_Mutation = {
  variables: PostCreate_MutationVariables;
  response: PostCreate_Mutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
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
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PostCreate_Mutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreatePostPayload",
        "kind": "LinkedField",
        "name": "createPost",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Post",
            "kind": "LinkedField",
            "name": "post",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          }
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
    "name": "PostCreate_Mutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreatePostPayload",
        "kind": "LinkedField",
        "name": "createPost",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Post",
            "kind": "LinkedField",
            "name": "post",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "5aab83587433bfbd3dcdae8b672e1e86",
    "id": null,
    "metadata": {},
    "name": "PostCreate_Mutation",
    "operationKind": "mutation",
    "text": "mutation PostCreate_Mutation(\n  $input: CreatePostInput!\n) {\n  createPost(input: $input) {\n    post {\n      title\n      content\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "695467e87b766e8317ace0ea9e52047d";

export default node;
