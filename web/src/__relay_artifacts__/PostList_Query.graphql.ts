/**
 * @generated SignedSource<<9fdcbfb8b3d3541f69e8a69bf9956e21>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type PostList_Query$variables = {};
export type PostList_QueryVariables = PostList_Query$variables;
export type PostList_Query$data = {
  readonly posts: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly title: string | null;
        readonly content: string | null;
      } | null;
    } | null> | null;
  };
};
export type PostList_QueryResponse = PostList_Query$data;
export type PostList_Query = {
  variables: PostList_QueryVariables;
  response: PostList_Query$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "PostList_Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "PostConnection",
        "kind": "LinkedField",
        "name": "posts",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "PostEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Post",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  (v1/*: any*/)
                ],
                "storageKey": null
              }
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
    "name": "PostList_Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "PostConnection",
        "kind": "LinkedField",
        "name": "posts",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "PostEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Post",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
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
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "427fe1eaf1b6012979e9cbf6321d516f",
    "id": null,
    "metadata": {},
    "name": "PostList_Query",
    "operationKind": "query",
    "text": "query PostList_Query {\n  posts {\n    edges {\n      node {\n        title\n        content\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "1cf09d6bf94b104931d2ee9785716258";

export default node;
