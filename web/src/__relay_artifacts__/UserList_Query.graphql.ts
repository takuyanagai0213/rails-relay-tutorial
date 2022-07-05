/**
 * @generated SignedSource<<5e7f89903d960a24d55d4f8117fcd790>>
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
    readonly groups: ReadonlyArray<{
      readonly name: string | null;
    }>;
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
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
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
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Group",
            "kind": "LinkedField",
            "name": "groups",
            "plural": true,
            "selections": [
              (v0/*: any*/)
            ],
            "storageKey": null
          }
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
            "concreteType": "Group",
            "kind": "LinkedField",
            "name": "groups",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "55f9f65a05ff88ae610c75ec5c598104",
    "id": null,
    "metadata": {},
    "name": "UserList_Query",
    "operationKind": "query",
    "text": "query UserList_Query {\n  users {\n    name\n    email\n    groups {\n      name\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "7bf9dcdc92ca9a6ea800f30c8af8a021";

export default node;
