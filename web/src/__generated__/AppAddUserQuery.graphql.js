/**
 * @generated SignedSource<<1403219ef6f2dc62d73cef40ad559cc0>>
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
      "name": "あああ"
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
    "name": "AppAddUserQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
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
              (v1/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": "createUser(input:{\"email\":\"test\",\"name\":\"あああ\"})"
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppAddUserQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
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
        "storageKey": "createUser(input:{\"email\":\"test\",\"name\":\"あああ\"})"
      }
    ]
  },
  "params": {
    "cacheID": "219818693392802aa97862b4193df30d",
    "id": null,
    "metadata": {},
    "name": "AppAddUserQuery",
    "operationKind": "mutation",
    "text": "mutation AppAddUserQuery {\n  createUser(input: {name: \"あああ\", email: \"test\"}) {\n    user {\n      name\n      email\n      id\n    }\n  }\n}\n"
  }
};
})();

node.hash = "dad4db47c83cfa66d1655c6734a4198f";

module.exports = node;
