/**
 * @generated SignedSource<<70d157c25c3e70fbd01b209274c38c02>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "input",
        "value": {
          "id": 2
        }
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
    "storageKey": "deleteUser(input:{\"id\":2})"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppDeleteUserQuery",
    "selections": (v0/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppDeleteUserQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "afbc445bdfaf5feb2cbc5a6f25d6a68b",
    "id": null,
    "metadata": {},
    "name": "AppDeleteUserQuery",
    "operationKind": "mutation",
    "text": "mutation AppDeleteUserQuery {\n  deleteUser(input: {id: 2}) {\n    user {\n      id\n    }\n  }\n}\n"
  }
};
})();

node.hash = "4a996164e53883081650ce5f9866ab09";

module.exports = node;
