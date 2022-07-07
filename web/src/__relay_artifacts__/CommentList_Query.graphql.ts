/**
 * @generated SignedSource<<5ddcccfdbb02d23cd33416e53f52f0dd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type CommentList_Query$variables = {};
export type CommentList_QueryVariables = CommentList_Query$variables;
export type CommentList_Query$data = {
  readonly comments: ReadonlyArray<{
    readonly name: string | null;
  }>;
};
export type CommentList_QueryResponse = CommentList_Query$data;
export type CommentList_Query = {
  variables: CommentList_QueryVariables;
  response: CommentList_Query$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CommentList_Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Comment",
        "kind": "LinkedField",
        "name": "comments",
        "plural": true,
        "selections": [
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "CommentList_Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Comment",
        "kind": "LinkedField",
        "name": "comments",
        "plural": true,
        "selections": [
          (v0/*: any*/),
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
    ]
  },
  "params": {
    "cacheID": "e329e2bc9a34d17c3fefad69f8dffe6c",
    "id": null,
    "metadata": {},
    "name": "CommentList_Query",
    "operationKind": "query",
    "text": "query CommentList_Query {\n  comments {\n    name\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "6ae15ecfb1e3baafd9886c82e1c49e9a";

export default node;
