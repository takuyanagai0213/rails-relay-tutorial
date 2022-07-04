/**
 * @generated SignedSource<<af26a1936758456abb6014d949e76129>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UserDelete_Query$variables = {
  id: string;
};
export type UserDelete_QueryVariables = UserDelete_Query$variables;
export type UserDelete_Query$data = {
  readonly deleteUser: {
    readonly user: {
      readonly id: string;
    } | null;
  } | null;
};
export type UserDelete_QueryResponse = UserDelete_Query$data;
export type UserDelete_Query = {
  variables: UserDelete_QueryVariables;
  response: UserDelete_Query$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "DeleteUserPayload",
    "kind": "LinkedField",
    "name": "deleteUser",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UserDelete_Query",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UserDelete_Query",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "36efb0cb531a0b3afd93fc1203d35548",
    "id": null,
    "metadata": {},
    "name": "UserDelete_Query",
    "operationKind": "mutation",
    "text": "mutation UserDelete_Query(\n  $id: ID!\n) {\n  deleteUser(input: {id: $id}) {\n    user {\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "506e1c9217d1da803f4a9315f7fd3f6d";

export default node;
