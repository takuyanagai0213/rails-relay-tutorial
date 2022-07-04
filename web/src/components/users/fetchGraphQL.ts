// your-app-name/src/fetchGraphQL.js
async function fetchGraphQL(text: any, variables: any) {
  // const REACT_APP_GITHUB_AUTH_TOKEN = process.env.REACT_APP_GITHUB_AUTH_TOKEN;

  // Fetch data from GitHub's GraphQL API:
  // const response = await fetch('https://api.github.com/graphql', {
  const response = await fetch('http://localhost:3000/graphql', {
      method: 'POST',
      headers: {
        // Authorization: `bearer ${REACT_APP_GITHUB_AUTH_TOKEN}`,
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify({
        query: text,
        variables,
      }),
    });

    return await response.json();
  }

  export default fetchGraphQL;
