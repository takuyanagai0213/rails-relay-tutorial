/**
 * @generated SignedSource<<815999c26064efe880b586a650959ae3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "input",
    "value": {
      "email": "test",
      "id": 2,
      "name": "いいい"
    }
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = {
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
    "name": "AppUpdateUserQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
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
              (v1/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": "updateUser(input:{\"email\":\"test\",\"id\":2,\"name\":\"いいい\"})"
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppUpdateUserQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
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
              (v1/*: any*/),
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
        "storageKey": "updateUser(input:{\"email\":\"test\",\"id\":2,\"name\":\"いいい\"})"
      }
    ]
  },
  "params": {
    "cacheID": "6600c3a11fc56e917ea2e3382dd63609",
    "id": null,
    "metadata": {},
    "name": "AppUpdateUserQuery",
    "operationKind": "mutation",
    "text": "mutation AppUpdateUserQuery {\n  updateUser(input: {id: 2, name: \"いいい\", email: \"test\"}) {\n    user {\n      name\n      email\n      id\n    }\n  }\n}\n"
  }
};
})();

node.hash = "d3052ecc5a1003aa980e4a0034f134e1";

module.exports = node;
