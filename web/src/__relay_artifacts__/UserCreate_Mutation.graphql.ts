/**
 * @generated SignedSource<<24b0080dee0624d0593a55f85350536d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateUserInput = {
  clientMutationId?: string | null;
  name: string;
  email?: string | null;
};
export type UserCreate_Mutation$variables = {
  input: CreateUserInput;
};
export type UserCreate_MutationVariables = UserCreate_Mutation$variables;
export type UserCreate_Mutation$data = {
  readonly createUser: {
    readonly user: {
      readonly id: string;
      readonly name: string | null;
      readonly email: string | null;
    } | null;
  } | null;
};
export type UserCreate_MutationResponse = UserCreate_Mutation$data;
export type UserCreate_Mutation = {
  variables: UserCreate_MutationVariables;
  response: UserCreate_Mutation$data;
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
    "concreteType": "CreateUserPayload",
    "kind": "LinkedField",
    "name": "createUser",
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
    "name": "UserCreate_Mutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UserCreate_Mutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "d3d8480b6f68cddc2e22ec4fabfafc15",
    "id": null,
    "metadata": {},
    "name": "UserCreate_Mutation",
    "operationKind": "mutation",
    "text": "mutation UserCreate_Mutation(\n  $input: CreateUserInput!\n) {\n  createUser(input: $input) {\n    user {\n      id\n      name\n      email\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "76522b9d73dbcffce09e6f73eb8f928d";

export default node;
