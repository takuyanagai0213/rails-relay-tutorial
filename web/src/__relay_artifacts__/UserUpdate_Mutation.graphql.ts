/**
 * @generated SignedSource<<1ed8f13032e7146692d3a5929ff3404d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdateUserInput = {
  clientMutationId?: string | null;
  id: string;
  name: string;
  email?: string | null;
};
export type UserUpdate_Mutation$variables = {
  input: UpdateUserInput;
};
export type UserUpdate_MutationVariables = UserUpdate_Mutation$variables;
export type UserUpdate_Mutation$data = {
  readonly updateUser: {
    readonly user: {
      readonly id: string;
      readonly name: string | null;
      readonly email: string | null;
    } | null;
  } | null;
};
export type UserUpdate_MutationResponse = UserUpdate_Mutation$data;
export type UserUpdate_Mutation = {
  variables: UserUpdate_MutationVariables;
  response: UserUpdate_Mutation$data;
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateUserPayload",
    "kind": "LinkedField",
    "name": "updateUser",
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "email",
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
    "name": "UserUpdate_Mutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UserUpdate_Mutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "b96c6aea3d2aaed112469d72853df9ba",
    "id": null,
    "metadata": {},
    "name": "UserUpdate_Mutation",
    "operationKind": "mutation",
    "text": "mutation UserUpdate_Mutation(\n  $input: UpdateUserInput!\n) {\n  updateUser(input: $input) {\n    user {\n      id\n      name\n      email\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "8c36834d83e48bace6989c66a5dde790";

export default node;
