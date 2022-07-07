/**
 * @generated SignedSource<<267582dfa45a4a1864759e4971af06b9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateCommentInput = {
  clientMutationId?: string | null;
  name: string;
  postId: string;
};
export type CommentCreate_Mutation$variables = {
  input: CreateCommentInput;
};
export type CommentCreate_MutationVariables = CommentCreate_Mutation$variables;
export type CommentCreate_Mutation$data = {
  readonly createComment: {
    readonly comment: {
      readonly name: string | null;
    } | null;
  } | null;
};
export type CommentCreate_MutationResponse = CommentCreate_Mutation$data;
export type CommentCreate_Mutation = {
  variables: CommentCreate_MutationVariables;
  response: CommentCreate_Mutation$data;
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
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CommentCreate_Mutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCommentPayload",
        "kind": "LinkedField",
        "name": "createComment",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Comment",
            "kind": "LinkedField",
            "name": "comment",
            "plural": false,
            "selections": [
              (v2/*: any*/)
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
    "name": "CommentCreate_Mutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCommentPayload",
        "kind": "LinkedField",
        "name": "createComment",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Comment",
            "kind": "LinkedField",
            "name": "comment",
            "plural": false,
            "selections": [
              (v2/*: any*/),
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
    "cacheID": "9efddfbcb48c8bb39874778cde609d4e",
    "id": null,
    "metadata": {},
    "name": "CommentCreate_Mutation",
    "operationKind": "mutation",
    "text": "mutation CommentCreate_Mutation(\n  $input: CreateCommentInput!\n) {\n  createComment(input: $input) {\n    comment {\n      name\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "a65bfbf07d8cdc991a3eb3c7434c9dc4";

export default node;
