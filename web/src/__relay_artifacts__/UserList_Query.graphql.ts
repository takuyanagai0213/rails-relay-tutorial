/**
 * @generated SignedSource<<f567d0a6eac00a315363f6e7f7c438dd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type UserList_Query$variables = {};
export type UserList_QueryVariables = UserList_Query$variables;
export type UserList_Query$data = {
  readonly users: ReadonlyArray<{
    readonly name: string | null;
    readonly email: string | null;
  }>;
};
export type UserList_QueryResponse = UserList_Query$data;
export type UserList_Query = {
  variables: UserList_QueryVariables;
  response: UserList_Query$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "UserList_Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "users",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/)
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
    "name": "UserList_Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "users",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
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
    "cacheID": "87a7ff0e65e751556294fe5471dd92e7",
    "id": null,
    "metadata": {},
    "name": "UserList_Query",
    "operationKind": "query",
    "text": "query UserList_Query {\n  users {\n    name\n    email\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "65f34607c75c99cfbb5aa0238ef363e8";

export default node;
