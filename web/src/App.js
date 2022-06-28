import React from 'react';
import './App.css';
import graphql from 'babel-plugin-relay/macro';
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
} from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';

const { Suspense } = React;

// Define a query
const UsersQuery = graphql`
  query AppUserQuery {
    users {
      name
    }
  }
`;
const AddUserQuery = graphql`
  mutation AppAddUserQuery {
    createUser (
      input: {
        name: "あああ"
        email: "test"
      }
    ){
      user {
        name
        email
      }
    }
  }
`;
const UpdateUserQuery = graphql`
  mutation AppUpdateUserQuery {
    updateUser (
      input: {
        id: 2
        name: "いいい"
        email: "test"
      }
    ){
      user {
        name
        email
      }
    }
  }
`;
const DeleteUserQuery = graphql`
  mutation AppDeleteUserQuery {
    deleteUser (
      input: {
        id: 2
      }
    ){
      user {
        id
      }
    }
  }
`;

const preloadedQuery = loadQuery(RelayEnvironment, UsersQuery, {
  /* query variables */
});
const preloadedQueryAddUser = loadQuery(RelayEnvironment, AddUserQuery, {
  /* query variables */
});
const preloadedQueryUpdateUser = loadQuery(RelayEnvironment, UpdateUserQuery, {
  /* query variables */
});
const preloadedQueryDeleteUser = loadQuery(RelayEnvironment, DeleteUserQuery, {
  /* query variables */
});

function App(props) {
  const data = usePreloadedQuery(UsersQuery, props.preloadedQuery);
  const users = data.users;

  const userList = users.map((user) =>
    <li>{user.name}</li>
  );

  const resp = usePreloadedQuery(AddUserQuery, props.preloadedQueryAddUser);
  console.log(resp)
  return (
    <div className="App">
      <header className="App-header">
        <ul>{userList}</ul>
      </header>
    </div>
  );
}

function AppRoot(props) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <App
          preloadedQuery={preloadedQuery}
          preloadedQueryAddUser={preloadedQueryAddUser}
          preloadedQueryUpdateUser={preloadedQueryUpdateUser}
          preloadedQueryDeleteUser={preloadedQueryDeleteUser}
        />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;
